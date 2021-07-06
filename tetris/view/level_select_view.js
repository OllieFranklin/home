addRangeChangeListener(document.querySelector("#level-range"), displayRangeValue);

displayRangeValue();

function displayRangeValue() {

	const level = Number(document.querySelector("#level-range").value);

	document.querySelector("#level-select-value").innerHTML = "Level " + level;

	const dropRate = new Gravity().withLevel(level).framesPerCell;
	document.querySelector("#drop-rate-desc").innerHTML = dropRate + " frames/drop";
	document.querySelector("#lines-to-level-up").innerHTML 
		= Game.getLinesUntilFirstLevelUp(level) + " lines until level " + (level + 1);
}

/**
 * Stolen from StackOverflow.
 * A way to detect when a range input's value changes
 */
function addRangeChangeListener(r, f) {
  var n,c,m;
  r.addEventListener("input", function(e){n=1;c=e.target.value;if(c!=m)f(e);m=c;});
  r.addEventListener("change", function(e){if(!n)f(e);});
}