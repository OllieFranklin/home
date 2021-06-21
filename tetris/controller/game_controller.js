// instantiates a game, gives it inputs
// reads outputs, and provides them to the view

class GameController {

    constructor(game, boardRenderer) {
        this.game = game;
        this.boardRenderer = boardRenderer;

        const me = this;
        this.interval = setInterval(function () {
            me.step();
        }, 1000/60);

        // console.log(this.game);

        // setInterval(this.step, 1000/60);

        // this.state = game.nextFrame(false, false, false, false, false);
        // this.draw(this.state);
        
        // for (let i =0 ; i < 130; i++) {
        //  game.nextFrame(false, false, false, false, false);
        // }
        // printFrame(false, false, false, false, false);
        // printFrame(false, true, false, false, false);
        // printFrame(false, true, false, false, false);
        // printFrame(false, true, false, false, false);

    }

    step() {
        const state = this.game.nextFrame(false, false, false, false, false);
        this.boardRenderer.draw(state);
    }
}

// let gameController;

// window.onload = function () {

	

//     // create a new Game
//     // attach eventListeners to the view 
//     // send inputs to the game
//     // recieve outputs from the game
//     // call functions in view with these outputs

// }

// function printFrame(up, left, right, rotateCW, rotateACW) {
// 	const state = game.nextFrame(up, left, right, rotateCW, rotateACW);
// 	console.log(state);
// }
