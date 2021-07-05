window.addEventListener("resize", () => NextBoxView.resize());

class NextBoxView {

	static canvas = document.querySelector("#next-box");
	static ctx = NextBoxView.canvas.getContext("2d");

	static resize() {
		if (this.canvas.height != this.canvas.offsetHeight 
			|| this.canvas.width != this.canvas.offsetWidth) {
			this.canvas.height = this.canvas.offsetHeight;
			this.canvas.width = this.canvas.offsetWidth;
		}
	}

	static draw(gameState) {

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		const tetromino = gameState.nextPiece;
		const rows = tetromino.length;
		const cols = tetromino[0].length;

		const left = (this.canvas.width - cols * BoardView.cellSize) * 0.5;
		const top = (this.canvas.height - rows * BoardView.cellSize) * 0.5;

		for (let row = 0; row < rows; row++) {
			
			const y = top + row * BoardView.cellSize;

		    for (let col = 0; col < cols; col++) {

		    	const x = left + col * BoardView.cellSize; 

		    	const str = tetromino[row][col]
		    	if (BoardView.textureMap.has(str)) {
		    		const texture = BoardView.textureMap.get(str);
		    		this.ctx.drawImage(texture, x, y, BoardView.cellSize, BoardView.cellSize);
		    	}
		    }
		}

	}

}