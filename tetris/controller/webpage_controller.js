document.querySelector("#new-game-btn").addEventListener("click", () => WebpageController.newGame());
document.querySelector("#select-level-btn").addEventListener("click", () => WebpageController.selectLevel());

document.addEventListener("keydown", (event) => WebpageController.keyHandler(event));

class WebpageController {

	static levelSelectElement = document.querySelector("#level-selection-container");
	static gameElement = document.querySelector("#game-container");
	static gameOverElement = document.querySelector("#game-over-container");

	static gameController;

	/**
	 * Handles the ENTER key being pressed. Either continues to the next screen,
	 * or plays/pauses the game.
	 * 
	 */ 
	static keyHandler(event) {

		if (event.repeat) {
			return;
		}

		const levelSelectVisible = this.levelSelectElement.style.display !== "none";
		const gameOverVisible = this.gameOverElement.style.display !== "none"
		const gameVisible = this.gameElement.style.display !== "none";

		if (event.keyCode == 13) {
			if (levelSelectVisible) {
				this.newGame();
			} else if (gameOverVisible) {
				this.selectLevel();
			} else if (gameVisible) {
				this.gameController.togglePlayPause();
			}
		}
	}

	static newGame() {
		// show game element, hide everything else
		this.gameElement.style.display = "flex";
		this.levelSelectElement.style.display = "none";
		this.gameOverElement.style.display = "none";

		// lose focus on the button/slider after this window is hidden
		document.querySelector("#new-game-btn").blur();
		document.querySelector("#level-range").blur();
		
		const level = document.querySelector("#level-range").value;
		this.gameController = new GameController(level);
		this.gameController.startGame();
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

		// lose focus on the button after it is pressed
		document.querySelector("#select-level-btn").blur();
	}
}