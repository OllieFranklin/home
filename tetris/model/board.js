class Board {

	constructor() {

		this.cells = new Array(ROWS);
		this.nextActiveTetromino = null;
		this.activeTetromino = null;

		this.newActiveTetromino();

		this.numRowsToMoveBy = [];
		this.linesToClear = [];

		for (let row = 0; row < ROWS; row++) {
			this.cells[row] = new Array(COLS);
			for (let col = 0; col < COLS; col++) {
				this.cells[row][col] = new Cell(row, col);
			}
		}
	}

	pieceLock() {
		
		for (let i=0; i<this.activeTetromino.orientation.cellOffsets.length; i++) {
			const cellOffset = this.activeTetromino.orientation.cellOffsets[i];
			const row = this.activeTetromino.getRow() + cellOffset.y;
			const col = this.activeTetromino.getCol() + cellOffset.x;
			this.cells[row][col].isActiveTetromino = false;
		}
		
	}

	findLinesToClear() {
		
		this.numRowsToMoveBy = [];
		this.linesToClear = []

		// figure out which rows need to be cleared and by how many rows each row needs to move down
		for (let row=0; row < ROWS; row++) {
			let lineIsFilled = true;
			for (let col=0; col < COLS; col++) {
				if (!this.cells[row][col].isOccupied) {
					lineIsFilled = false;
					break;
				}
			}

			this.numRowsToMoveBy[row] = this.linesToClear.length;
	        if (lineIsFilled) {
	            this.linesToClear.push(row);
	        }
		}

		return this.linesToClear.length > 0;
	}

	clearLines(columnIndex) {

		for (let i=0; i < this.linesToClear.length; i++) {
			const row = this.linesToClear[i];

			const col1 = Math.floor(COLS / 2) - 1 - columnIndex;
			const col2 = Math.floor(COLS / 2) + columnIndex
			this.cells[row][col1].clear();
			this.cells[row][col2].clear();
		}

	}

	moveLinesDown() {

		for (let row=1; row < ROWS; row++) {
			
			const numRows = this.numRowsToMoveBy[row];
			if (numRows == 0)
				continue;

			for (let col=0; col < COLS; col++) {

				const cell = this.cells[row][col];

				if (cell.isOccupied)
					this.cells[row-numRows][col].occupy(cell.toString());
				else
					this.cells[row-numRows][col].clear();
				
				this.cells[row][col].clear();
			}
		}

	}

	newActiveTetromino() {	

		this.activeTetromino = this.nextActiveTetromino;

		const randomIndex = Math.floor(Math.random() * TETROMINO_TYPES.length);
		const tetrominoClass = eval(TETROMINO_TYPES[randomIndex]);
		this.nextActiveTetromino = new tetrominoClass();

		if (this.activeTetromino == null)
			return false;
		
		if (this.canPlaceActiveTetromino(TETROMINO_INIT_ROW, TETROMINO_INIT_COL)) {
			this.placeActiveTetromino(TETROMINO_INIT_ROW, TETROMINO_INIT_COL);
			return true;
		}

		return false;
	}

	canPlaceActiveTetromino(row, col) {

		if (row < 0 || col < 0 || row >= ROWS || col >= COLS) {
			return false;
		}

		for (let i=0; i<this.activeTetromino.orientation.cellOffsets.length; i++) {
			const cellOffset = this.activeTetromino.orientation.cellOffsets[i];

			try {
				const cell = this.cells[row + cellOffset.y][col + cellOffset.x];

				if (cell.isOccupied && !cell.isActiveTetromino)
					return false;
			} catch (error) {
				return false;
			}
		}

		return true;
	}


	placeActiveTetromino(row, col) {

		if (row < 0 || col < 0 || row >= ROWS || col >= COLS) {
			throw new Error("Out of bounds value for tetromino position");
		}

		this.activeTetromino.setPos(row, col);
		for (let i=0; i<this.activeTetromino.orientation.cellOffsets.length; i++) {
			const cellOffset = this.activeTetromino.orientation.cellOffsets[i];
			const cell = this.cells[row + cellOffset.y][col + cellOffset.x];

			cell.occupy(this.activeTetromino.toString());
			cell.isActiveTetromino = true;
		}

	}

	clearActiveTetromino() {

		for (let i=0; i<this.activeTetromino.orientation.cellOffsets.length; i++) {
			const cellOffset = this.activeTetromino.orientation.cellOffsets[i];
			const row = this.activeTetromino.getRow() + cellOffset.y;
			const col = this.activeTetromino.getCol() + cellOffset.x;
			const cell = this.cells[row][col];

			cell.clear();
		}
	}

	getActiveTetromino() {
		return this.activeTetromino;
	}

	getNumLinesCleared() {
		return this.linesToClear.length;
	}

	getState() {
		
		const state = new Array(VISIBLE_ROWS);

		for (let row = 0; row < VISIBLE_ROWS; row++) {
			state[row] = new Array(COLS);
			for (let col = 0; col < COLS; col++) {
				state[row][col] = this.cells[VISIBLE_ROWS - (row + 1)][col].toString();
			}
		}

		return state;
	}

}