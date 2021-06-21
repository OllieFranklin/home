class Cell {

	constructor(row, col) {
		this.isOccupied = false;
		this.isActiveTetromino = false;

		this.x = col * CELL_SIZE;
		this.y = CELL_SIZE * VISIBLE_ROWS - CELL_SIZE * (row + 1);
	}

	occupy(texture) {
		this.texture = texture;
		this.isOccupied = true;
	}

	clear() {
		this.isOccupied = false;
		this.isActiveTetromino = false;
	}

	draw(ctx) {

		if (!this.isOccupied)
			return;

		ctx.drawImage(this.texture, this.x, this.y, CELL_SIZE, CELL_SIZE);
	}

	getTexture() {
		return this.texture;
	}

}