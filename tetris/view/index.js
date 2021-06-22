// main javascript file

const c = document.getElementById("board");;
const ctx = c.getContext("2d");
let gameController;

document.getElementById("new-game-btn").addEventListener('click', newGame);

// const range = document.getElementById("level-range");
// onRangeChange(range, displayRangeValue);
// displayRangeValue();

function resizeBoard() {

	if (c == null)
		return;

	if (c.height != c.offsetHeight) {
		c.height = c.offsetHeight;
		c.width = c.offsetWidth;
	}
}

window.onresize = function() {
	resizeBoard();	
}

function newGame() {
	gameController = new GameController().startGame(0);
	
	document.getElementById("game-container").style.display = "flex";
	document.getElementById("level-selection-container").style.display = "none";
	
	resizeBoard();
}

function showLevelSelect() {
	document.getElementById("game-container").style.display = "none";
	document.getElementById("level-selection-container").style.display = "flex";
}

function onRangeChange(r,f) {
  var n,c,m;
  r.addEventListener("input",function(e){n=1;c=e.target.value;if(c!=m)f(e);m=c;});
  r.addEventListener("change",function(e){if(!n)f(e);});
}

function displayRangeValue() {

	const level = document.getElementById("level-range").value;

	document.getElementById("level-select-value").innerHTML = "Level " + level;

	const dropRate = new Gravity().withLevel(level).framesPerCell;
	document.getElementById("drop-rate-desc").innerHTML 
		= dropRate + " frames/drop";
	document.getElementById("lines-to-level-up").innerHTML 
		= linesUntilLevelUp(level) + " lines until level " + (Number(level) + 1);
}
