const textureMap = getTextureMap();

class BoardView {

	constructor() {
		this.canvas = document.querySelector("#board");
		this.ctx = this.canvas.getContext("2d");

		window.addEventListener("resize", () => this.resize());
	}

	resize() {
		if (this.canvas.height != this.canvas.offsetHeight) {
			this.canvas.height = this.canvas.offsetHeight;
			this.canvas.width = this.canvas.offsetWidth;
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
		    	if (textureMap.has(str)) {
		    		this.ctx.drawImage(textureMap.get(str), x, y, cellWidth, cellHeight);
		    	}
		    }
		}

	}

}

function getTextureMap() {
	const output = new Map();
	const tetriminoTypes = ["I", "J", "L", "O", "S", "T", "Z"];
	for (let i = 0; i < tetriminoTypes.length; i++) {
		const texture = document.getElementById(tetriminoTypes[i] + "_Tetromino_default");
		output.set(tetriminoTypes[i], texture);
	}

	return output;
}