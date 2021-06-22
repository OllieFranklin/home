// instantiates a game, gives it inputs
// reads outputs, and provides them to the view
class GameController {

    constructor() {
        this.boardView = new BoardView();
        this.nextBoxView = new NextBoxView();
        this.keyStates = new KeyState(false, false, false, false, false);

        document.addEventListener("keydown", () => this.handleKeyPress(event, true));
        document.addEventListener("keyup", () => this.handleKeyPress(event, false));
    }

    startGame(level) {
        this.game = new Game(level);

        const me = this;
        this.timer = setInterval(() => me.step(), 1000/60);

        this.boardView.resize();
        this.nextBoxView.resize();

        return this;
    }

    stopGame() {
        if (this.timer !== undefined) {
            clearInterval(this.timer);
        }
    }

    step() {
        const state = this.game.nextFrame(this.keyStates);
        this.boardView.draw(state);
        this.nextBoxView.draw(state);
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