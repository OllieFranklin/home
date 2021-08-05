class GameController {

    constructor(level) {
        this.game = new Game(level);

        this.keyStates = new KeyState(false, false, false, false, false);

        document.addEventListener("keydown", () => this.handleKeyPress(event, true));
        document.addEventListener("keyup", () => this.handleKeyPress(event, false));
    }

    startGame() {
        const me = this;
        this.isPaused = false;
        this.timer = setInterval(() => me.step(), 1000/60);
        
        BoardView.resize();
        NextBoxView.resize();

        BoardView.clear();
        NextBoxView.clear();
    }

    step() {
        if (!this.isPaused) {
            this.state = this.game.nextFrame(this.keyStates);
        }

        if (this.state !== undefined) {
            BoardView.draw(this.state);
            NextBoxView.draw(this.state);
            StatsView.draw(this.state);

            if (this.state.isGameOver) {
                clearInterval(this.timer);
                WebpageController.gameOver();
            }
        }
    }

    togglePlayPause() {
        this.isPaused = !this.isPaused;
    }

    handleKeyPress(event, isPressed) {
        if (event.repeat)
            return;

        switch(event.keyCode) {
            case 40: // DOWN
                this.keyStates.down = isPressed;
                break;
            case 37: // LEFT
                this.keyStates.left = isPressed;
                break;
            case 39: // RIGHT
                this.keyStates.right = isPressed;
                break;
            case 90: // Z
                this.keyStates.rotateCW = isPressed;
                break;
            case 88: // X
                this.keyStates.rotateACW = isPressed;
                break;
        }
    }

}