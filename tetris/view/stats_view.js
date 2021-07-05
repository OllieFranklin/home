class StatsView {

	static levelElements = document.querySelectorAll(".level-stat");
	static linesElements = document.querySelectorAll(".lines-stat");
	static scoreElements = document.querySelectorAll(".score-stat");
	static tetrisRateElements = document.querySelectorAll(".tetris-rate-stat");
	static droughtElements = document.querySelectorAll(".drought-stat");
	static burnElements = document.querySelectorAll(".burn-stat");

	static draw(gameState) {
		this.levelElements.forEach((e) => e.innerHTML = gameState.level);
		this.linesElements.forEach((e) => e.innerHTML = gameState.lines);
		this.scoreElements.forEach((e) => e.innerHTML = gameState.score);
		this.tetrisRateElements.forEach((e) => e.innerHTML = gameState.tetrisRate);
		this.droughtElements.forEach((e) => e.innerHTML = gameState.drought);
		this.burnElements.forEach((e) => e.innerHTML = gameState.burn);
	}

}