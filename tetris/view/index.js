// main javascript file

// const c = document.getElementById("board");;
// const ctx = c.getContext("2d");
let gameController;

document.querySelector("#new-game-btn").addEventListener("click", newGame);

// const range = document.getElementById("level-range");
// onRangeChange(range, displayRangeValue);
// displayRangeValue();

function newGame() {
	document.querySelector("#game-container").style.display = "flex";
	document.querySelector("#level-selection-container").style.display = "none";
	
	gameController = new GameController().startGame(0);
}

function showLevelSelect() {
	document.querySelector("#game-container").style.display = "none";
	document.querySelector("#level-selection-container").style.display = "flex";
}

function onRangeChange(r,f) {
  var n,c,m;
  r.addEventListener("input",function(e){n=1;c=e.target.value;if(c!=m)f(e);m=c;});
  r.addEventListener("change",function(e){if(!n)f(e);});
}

function displayRangeValue() {

	const level = document.querySelector("#level-range").value;

	document.querySelector("#level-select-value").innerHTML = "Level " + level;

	const dropRate = new Gravity().withLevel(level).framesPerCell;
	document.querySelector("#drop-rate-desc").innerHTML = dropRate + " frames/drop";
	document.querySelector("#lines-to-level-up").innerHTML 
		= linesUntilLevelUp(level) + " lines until level " + (Number(level) + 1);
}
