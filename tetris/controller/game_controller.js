// instantiates a game, gives it inputs
// reads outputs, and provides them to the view

let game;

window.onload = function () {

	game = new Game(29);

    // create a new Game
    // attach eventListeners to the view 
    // send inputs to the game
    // recieve outputs from the game
    // call functions in view with these outputs

    // for (let i =0 ; i < 130; i++) {
    // 	game.nextFrame(false, false, false, false, false);
    // }
    printFrame(false, false, false, false, false);
    // printFrame(false, true, false, false, false);
    // printFrame(false, true, false, false, false);
    // printFrame(false, true, false, false, false);

}

function printFrame(up, left, right, rotateCW, rotateACW) {
	const state = game.nextFrame(up, left, right, rotateCW, rotateACW);
	console.log(state);
}
