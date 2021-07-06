class StatsView {

	static levelElements = document.querySelectorAll(".level-stat");
	static linesElements = document.querySelectorAll(".lines-stat");
	static scoreElements = document.querySelectorAll(".score-stat");
	static tetrisRateElements = document.querySelectorAll(".tetris-rate-stat");
	static droughtElements = document.querySelectorAll(".drought-stat");
	static burnElements = document.querySelectorAll(".burn-stat");

	static prevGameState = new GameState(null, null, null, null, null, null, null, null);

	static draw(gameState) {

		if (gameState.level !== this.prevGameState.level) {
			this.levelElements.forEach((e) => e.innerHTML = gameState.level);
		}
		if (gameState.lines !== this.prevGameState.lines) {
			this.linesElements.forEach((e) => e.innerHTML = gameState.lines);
		}
		if (gameState.score !== this.prevGameState.score) {
			this.scoreElements.forEach((e) => e.innerHTML = gameState.score);
		}
		if (gameState.tetrisRate !== this.prevGameState.tetrisRate) {
			this.tetrisRateElements.forEach((e) => e.innerHTML = gameState.tetrisRate);
		}
		if (gameState.drought !== this.prevGameState.drought) {
			this.droughtElements.forEach((e) => e.innerHTML = gameState.drought);
		}
		if (gameState.burn !== this.prevGameState.burn) {
			this.burnElements.forEach((e) => e.innerHTML = gameState.burn);
		}
		
		this.prevGameState = gameState;
	}

}