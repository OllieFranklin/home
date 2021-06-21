class Game {

	constructor(ctx, initialLevel) {
		this.moves = [];
		this.ctx = ctx;
		this.DAS = new AutoShift();
		this.board = new Board();
		this.infoPanel = new InfoPanel(this);
		this.gravity = new Gravity().withLevel(initialLevel);
    	this.softDrop = new Gravity().withSpeed(2);
    	this.menu = new Menu(ctx);

		this.keysPressed = {
			DOWN: false,
			LEFT: false,
			RIGHT: false
		}

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

		document.addEventListener("keydown", () => this.handleKeyDown(event));
		document.addEventListener("keyup", () => this.handleKeyUp(event));

		console.log(this.board);
	}

	onFrame() {
		this.draw();
		this.loop();
	}

	loop() {

		FRAME_NUM++;

		if (this.gameState == this.States.LINE_CLEAR) {

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
			
			return;
		}

		if (this.gameState == this.States.ARE) {
			
			if (this.entryDelay > 1) {
				this.entryDelay--;
			} else {
				const canPlaceTetromino = this.board.newActiveTetromino(); 
				this.gameState = canPlaceTetromino ? this.States.PLAYING : this.States.GAME_OVER;
			}
			
			return;
		}

    	if (this.gravity.isDropping() || this.keysPressed.DOWN && this.softDrop.isDropping())
        	this.moves.push(new MoveDown());

		for (const move of this.moves) {
			let moveWasSuccessful = move.apply(this.board);
			if (!moveWasSuccessful && move instanceof MoveDown) {
				this.onLockDown();
			}
		}
		this.moves = [];

		let autoShiftMove = this.DAS.getNextMove(); 
		if (autoShiftMove != null)
			this.moves.push(autoShiftMove);       
    }

    draw() {
        this.board.draw(this.ctx); 
        this.infoPanel.draw(this.ctx);
    }

	handleKeyDown(event) {

		if (event.repeat)
			return;

		switch(event.keyCode) {
			case 37: // LEFT
				this.keysPressed.LEFT = true;
				if (this.keysPressed.RIGHT) {
					this.DAS.disable();
				} else {
					this.moves.push(new MoveLeft());
					this.DAS.startMovingLeft();
				}
				break;
			case 39: // RIGHT
				this.keysPressed.RIGHT = true;
				if (this.keysPressed.LEFT) {
					this.DAS.disable();
				} else {
					this.moves.push(new MoveRight());
					this.DAS.startMovingRight();
				}
				break;
			case 38: // UP
				this.moves.push(new RotateCW());
				break;
			case 90: // Z
				this.moves.push(new RotateACW());
				break;
			case 40: // DOWN
				this.keysPressed.DOWN = true;
				this.softDrop.setCounter(-1);
				this.gravity.setCounter(0);
				this.moves.push(new MoveDown());
				break;
		}
	}

	handleKeyUp(event) {

		switch(event.keyCode) {
			case 40: // DOWN
				this.keysPressed.DOWN = false;
				break;
			case 37: // LEFT
				this.keysPressed.LEFT = false;
				this.DAS.disable();
				if (this.keysPressed.RIGHT) {
                    this.moves.push(new MoveRight());
                    this.DAS.startMovingRight();
                }
				break;
			case 39: // RIGHT
				this.keysPressed.RIGHT = false;
				this.DAS.disable();
				if (this.keysPressed.LEFT) {
                    this.moves.push(new MoveLeft());
                    this.DAS.startMovingLeft();
                }
				break;
		}
	}

	onLockDown() {
		this.keysPressed.DOWN = false;
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

	getLinesUntilFirstLevelUp(level) {
		if (level == 0)
			return 10;
		if (level == 1)
			return 20;
		if (level == 2)
			return 30;
		if (level == 3)
			return 40;
		if (level == 4)
			return 50;
		if (level == 5)
			return 60;
		if (level == 6)
			return 70;
		if (level == 7)
			return 80;
		if (level == 8)
			return 90;
		if (level >= 9 && level < 16)
			return 100;
		if (level == 16)
			return 110;
		if (level == 17)
			return 120;
		if (level == 18)
			return 130;
		if (level == 19)
			return 140;
		if (level == 20)
			return 150;
		if (level == 21)
			return 160;
		if (level == 22)
			return 170;
		if (level == 23)
			return 180;
		if (level == 24)
			return 190;
		if (level >= 25)
			return 200;
		
		throw new Error("Invalid level number");
	}

	isLost() {
		return this.gameState == this.States.GAME_OVER;
	}

}