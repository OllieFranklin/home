window.addEventListener("resize", () => BoardView.resize());

class BoardView {

	static canvas = document.querySelector("#board");
	static ctx = BoardView.canvas.getContext("2d");
	static cellSize = 0;

	static resize() {
		if (this.canvas.height != this.canvas.offsetHeight) {
			this.canvas.height = this.canvas.offsetHeight;
			this.canvas.width = this.canvas.offsetWidth;
		}
	}

	static draw(gameState) {

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		const boardState = gameState.board;

		const rows = boardState.length;
		const cols = boardState[0].length;

		this.cellSize = this.canvas.width / cols;

		for (let row = 0; row < rows; row++) {
			
			const y = row * this.cellSize;

		    for (let col = 0; col < cols; col++) {

		    	const x = col * this.cellSize; 

		    	const str = boardState[row][col]
		    	if (Textures.hasTexture(str)) {
		    		this.ctx.drawImage(Textures.getTexture(str), x, y, this.cellSize, this.cellSize);
		    	}
		    }
		}

	}

	static clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

}