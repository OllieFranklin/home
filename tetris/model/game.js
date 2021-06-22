const ROWS = 22;
const VISIBLE_ROWS = 20;
const COLS = 10;
const CELL_SIZE = 30;
const TETROMINO_INIT_ROW = 19;
const TETROMINO_INIT_COL = 5;

const TETROMINO_TYPES = [
	"I_Tetromino",
	"J_Tetromino",
	"L_Tetromino",
	"O_Tetromino",
	"S_Tetromino",
	"T_Tetromino",
	"Z_Tetromino"
];

let FRAME_NUM = 1;

class Game {

	constructor(initialLevel) {
		this.moves = [];
		this.DAS = new AutoShift();
		this.board = new Board();
		this.gravity = new Gravity().withLevel(initialLevel);
    	this.softDrop = new Gravity().withSpeed(2);

		this.keyStates = new KeyState(false, false, false, false, false);

		this.States = {
			ARE: "ARE",
			PLAYING: "PLAYING",
			LINE_CLEAR: "LINE_CLEAR",
			GAME_OVER: "GAME_OVER"
		}
		this.gameState = this.States.ARE;
		this.lineClearAnimationFrame = 0;

		this.initialLevel = initialLevel;
		this.level = initialLevel;
		this.linesBeforeFirstLevelUp = this.getLinesUntilFirstLevelUp(initialLevel); 
		this.numLinesCleared = 0;
	}

	/**
	 * Method called by controller to progress game by 1 frame.
	 *
	 * Returns a GameState object representing the current state of the game.
	 */
	nextFrame(inputs) {
		
		this.handleKeysPressed(inputs);
		this.handleKeysReleased(inputs);

		this.keyStates = inputs.copy();

		this.doFrame();

		return new GameState(
			this.board.getState(),
			this.board.getNextTetromino().getState(),
			this.level,
			this.numLinesCleared);
	}

	handleKeysPressed(inputs) {

		const downPressed = !this.keyStates.down && inputs.down;
		const leftPressed = !this.keyStates.left && inputs.left;
		const rightPressed = !this.keyStates.right && inputs.right;
		const rotateCWPressed = !this.keyStates.rotateCW && inputs.rotateCW;
		const rotateACWPressed = !this.keyStates.rotateACW && inputs.rotateACW;

		if (leftPressed) {
			if (inputs.right) {
				this.DAS.disable();
			} else {
				this.moves.push(new MoveLeft());
				this.DAS.startMovingLeft();
			}
		}

		if (rightPressed) {
			if (inputs.left) {
				this.DAS.disable();
			} else {
				this.moves.push(new MoveRight());
				this.DAS.startMovingRight();
			}
		}

		if (rotateCWPressed) {
			this.moves.push(new RotateCW());
		}

		if (rotateACWPressed) {
			this.moves.push(new RotateACW());
		}

		if (downPressed) {
			this.softDrop.setCounter(-1);
			this.gravity.setCounter(0);
			this.moves.push(new MoveDown());
		}
	}

	handleKeysReleased(inputs) {

		const downReleased = this.keyStates.down && !inputs.down;
		const leftReleased = this.keyStates.left && !inputs.left;
		const rightReleased = this.keyStates.right && !inputs.right;
		const rotateCWReleased = this.keyStates.rotateCW && !inputs.rotateCW;
		const rotateACWReleased = this.keyStates.rotateACW && !inputs.rotateACW;

		if (leftReleased) {
			this.DAS.disable();
			if (inputs.right) {
                this.moves.push(new MoveRight());
                this.DAS.startMovingRight();
            }
		}

		if (rightReleased) {
			this.DAS.disable();
			if (inputs.left) {
                this.moves.push(new MoveLeft());
                this.DAS.startMovingLeft();
            }
		}

	}

	doFrame() {

		FRAME_NUM++;

		if (this.gameState == this.States.LINE_CLEAR) {
			this.doLineClear();
		} else if (this.gameState == this.States.ARE) {
			
			if (this.entryDelay > 1) {
				this.entryDelay--;
			} else {
				const canPlaceTetromino = this.board.newActiveTetromino(); 
				this.gameState = canPlaceTetromino ? this.States.PLAYING : this.States.GAME_OVER;
			}
		} else {

			if (this.gravity.isDropping() || this.keyStates.down && this.softDrop.isDropping()) {
        		this.moves.push(new MoveDown());
			}

			for (const move of this.moves) {
				let moveWasSuccessful = move.apply(this.board);
				if (!moveWasSuccessful && move instanceof MoveDown) {
					this.onLockDown();
				}
			}
			this.moves = [];

			let autoShiftMove = this.DAS.getNextMove(); 
			if (autoShiftMove != null) {
				this.moves.push(autoShiftMove);
			}
		}       
    }

    doLineClear() {

		if (this.lineClearAnimationFrame < 20) {

			if (this.lineClearAnimationFrame % 4 == 3) {

				let columnIndex = (this.lineClearAnimationFrame + 1) / 4 - 1;
				this.board.clearLines(columnIndex);
			}
			this.lineClearAnimationFrame++;
		} else {
			this.board.moveLinesDown();
			
			const tensBefore = Math.floor(this.numLinesCleared/10);
			this.numLinesCleared += this.board.getNumLinesCleared();
			const tensAfter = Math.floor(this.numLinesCleared/10);

			if (this.level != this.initialLevel && tensBefore != tensAfter)
				this.levelUp();

			if (this.level == this.initialLevel && this.numLinesCleared >= this.linesBeforeFirstLevelUp)
				this.levelUp();

			this.gameState = this.States.ARE;
		}
			
	}

	onLockDown() {
		this.keyStates.down = false;
		this.board.pieceLock();
		if (this.board.findLinesToClear()) {
			this.gameState = this.States.LINE_CLEAR;
			this.lineClearAnimationFrame = 0;
		} else {
			const activeTetrominoRow = this.board.getActiveTetromino().getRow();
			this.entryDelay = this.getEntryDelay(activeTetrominoRow);
			this.gameState = this.States.ARE;
		}
	}

	getEntryDelay(activeTetrominoRow) {
		return 10 + Math.floor((Math.min(activeTetrominoRow, 17) + 2) / 4) * 2;
	}

	levelUp() {
		this.level++;
		this.gravity = new Gravity().withLevel(this.level);
		console.log("You are now on level " + this.level);
	}

	getLinesUntilFirstLevelUp(initLevel) {
		if (initLevel < 9)
			return 10*initLevel + 10;
		
		if (initLevel < 16)
			return 100;

		return 10*initLevel - 50
	}

	isLost() {
		return this.gameState == this.States.GAME_OVER;
	}

}