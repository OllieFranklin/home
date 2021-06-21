class BoardRenderer {

	constructor() {
		this.canvas = document.getElementById("board");
		this.ctx = this.canvas.getContext("2d");

		const tetriminoTypes = ["I", "J", "L", "O", "S", "T", "Z"];
		this.textureMap = new Map();
		for (let i = 0; i < tetriminoTypes.length; i++) {
			const texture = document.getElementById(tetriminoTypes[i] + "_Tetromino_default");
			this.textureMap.set(tetriminoTypes[i], texture);
		}
	}

	draw(gameState) {

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		const boardState = gameState.board;

		const rows = boardState.length;
		const cols = boardState[0].length;

		const cellWidth = this.canvas.width / cols;
		const cellHeight = this.canvas.height / rows;

		for (let row = 0; row < rows; row++) {
			
			const y = row * cellHeight;

		    for (let col = 0; col < cols; col++) {

		    	const x = col * cellWidth; 

		    	const str = boardState[row][col]
		    	if (this.textureMap.has(str)) {
		    		this.ctx.drawImage(this.textureMap.get(str), x, y, cellWidth, cellHeight);
		    	}
		    }
		}

	}

}