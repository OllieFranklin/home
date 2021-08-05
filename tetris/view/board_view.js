window.addEventListener("resize", () => BoardView.resize());


class BoardView {

	static canvas = document.querySelector("#board");
	static ctx = BoardView.canvas.getContext("2d");
	static cellSize = 0;

	static resize() {

		// find a width for the board that's divisible by 10
		// this ensures that all cells can be rendered on integer values

		// first we need to find the height of the document
		const body = document.body, html = document.documentElement;
		const documentHeight = Math.max( body.scrollHeight, body.offsetHeight,
			html.clientHeight, html.scrollHeight, html.offsetHeight);

		// then set the board height to 90% document height
		const height90 = 0.9 * documentHeight;
		const boardHeight = height90 - height90 % 20;

		this.canvas.style.height = boardHeight + "px";
		this.canvas.style.width = (boardHeight * 0.5) + "px";

		if (this.canvas.height != this.canvas.offsetHeight) {
			this.canvas.height = this.canvas.offsetHeight;
			this.canvas.width = this.canvas.offsetWidth;
		}

		// also update the stats container to be the same height as the board
		document.querySelector("#stats-container").style.height = this.canvas.style.height;
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