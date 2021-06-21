class Cell {

	constructor(row, col) {
		this.isOccupied = false;
		this.isActiveTetromino = false;

		this.x = col * CELL_SIZE;
		this.y = CELL_SIZE * VISIBLE_ROWS - CELL_SIZE * (row + 1);
	}

	occupy(tetrominoName) {
		this.isOccupied = true;
		this.tetrominoName = tetrominoName;
	}

	clear() {
		this.isOccupied = false;
		this.isActiveTetromino = false;
	}

	toString() {
		return this.isOccupied ? this.tetrominoName : " ";
	}

}