class NextBoxView {

	constructor() {
		this.canvas = document.querySelector("#next-box");
		this.ctx = this.canvas.getContext("2d");

		window.addEventListener("resize", () => this.resize());
	}

	resize() {
		if (this.canvas.height != this.canvas.offsetHeight 
			|| this.canvas.width != this.canvas.offsetWidth) {
			this.canvas.height = this.canvas.offsetHeight;
			this.canvas.width = this.canvas.offsetWidth;
		}
	}

	draw(gameState) {

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		const tetromino = gameState.nextPiece;
		const rows = tetromino.length;
		const cols = tetromino[0].length;

		const cellSize = Math.min(this.canvas.width / 4, this.canvas.height/3);
		const left = (this.canvas.width - cols * cellSize) * 0.5;
		const top = (this.canvas.height - rows * cellSize) * 0.5


		for (let row = 0; row < rows; row++) {
			
			const y = top + row * cellSize;

		    for (let col = 0; col < cols; col++) {

		    	const x = left + col * cellSize; 

		    	const str = tetromino[row][col]
		    	if (textureMap.has(str)) {
		    		this.ctx.drawImage(textureMap.get(str), x, y, cellSize, cellSize);
		    	}
		    }
		}

	}

}