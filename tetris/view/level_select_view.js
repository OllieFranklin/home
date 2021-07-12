document.addEventListener("keydown", () => LevelSelectView.rangeSliderKeyHandler());

class LevelSelectView {

	static rangeElement = document.querySelector("#level-range");

	static displayRangeValue() {
		const level = Number(this.rangeElement.value);

		document.querySelector("#level-select-value").innerHTML = "Level " + level;

		const dropRate = new Gravity().withLevel(level).framesPerCell;
		document.querySelector("#drop-rate-desc").innerHTML = dropRate + " frames/drop";
		document.querySelector("#lines-to-level-up").innerHTML 
			= Game.getLinesUntilFirstLevelUp(level) + " lines until level up";
	}

	static rangeSliderKeyHandler() {

		// return if the slider is already focused, otherwise there would be
		// two sets of keyboard controls acting on the range element
		if (this.rangeElement === document.activeElement) {
			return;
		}

		// ignore key presses if the level selection screen isn't visible
		if (document.querySelector("#level-selection-container").style.display === "none") {
			return;
		}

	    if (event.keyCode === 39) {
	        this.rangeElement.value++;
	        this.displayRangeValue();
	    } else if (event.keyCode === 37) {
	        this.rangeElement.value--;
	        this.displayRangeValue();
	    }
	}

	/**
	 * Stolen from StackOverflow. A way to detect when a range input's value changes.
	 */
	static addRangeChangeListener(r, f) {
	  var n,c,m;
	  r.addEventListener("input", function(e){n=1;c=e.target.value;if(c!=m)f(e);m=c;});
	  r.addEventListener("change", function(e){if(!n)f(e);});
	}
}

LevelSelectView.addRangeChangeListener(LevelSelectView.rangeElement, () => LevelSelectView.displayRangeValue());
LevelSelectView.displayRangeValue();