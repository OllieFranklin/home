document.querySelector("#new-game-btn").addEventListener("click", () => WebpageController.newGame());
document.querySelector("#select-level-btn").addEventListener("click", () => WebpageController.selectLevel());

class WebpageController {

	static levelSelectElement = document.querySelector("#level-selection-container");
	static gameElement = document.querySelector("#game-container");
	static gameOverElement = document.querySelector("#game-over-container");

	static newGame() {
		// show game element, hide everything else
		this.gameElement.style.display = "flex";
		this.levelSelectElement.style.display = "none";
		this.gameOverElement.style.display = "none";
		
		const level = document.querySelector("#level-range").value;
		const gameController = new GameController(level);
		gameController.startGame();
	}

	static gameOver() {
		// show game over element, hide everything else
		this.gameOverElement.style.display = "flex";
		this.levelSelectElement.style.display = "none";
		this.gameElement.style.display = "none";
	}

	static selectLevel() {
		// show level select element, hide everything else
		this.levelSelectElement.style.display = "flex";
		this.gameElement.style.display = "none";
		this.gameOverElement.style.display = "none";

		document.querySelector("#game-container").style.display = "none";
		document.querySelector("#level-selection-container").style.display = "flex";
	}
}