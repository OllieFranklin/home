class Tetromino {

	constructor() {
        if (this.constructor == Tetromino) {
            throw new Error("Can't instantiate abstract class Tetromino");
        }

        this.orientations = [];
        this.initOrientations();
		this.orientationIndex = 0;
		this.orientation = this.orientations[this.orientationIndex];
		this.row = TETROMINO_INIT_ROW;
		this.col = TETROMINO_INIT_COL;
		this.texture = document.getElementById(this.constructor.name + "_default");
	}

    initOrientations() {
    	throw new Error("Method 'initOrientations()' must be implemented");
    }

    rotateClockwise() {
    	this.orientationIndex--;

    	if (this.orientationIndex < 0)
    		this.orientationIndex = this.orientations.length - 1;

    	this.orientation = this.orientations[this.orientationIndex];
    }

    rotateAntiClockwise() {
    	this.orientationIndex++;

    	if (this.orientationIndex >= this.orientations.length)
    		this.orientationIndex = 0;

    	this.orientation = this.orientations[this.orientationIndex];	
    }

    setPos(row, col) {
    	this.row = row;
    	this.col = col;
    }

    getRow() {
    	return this.row;
    }

    getCol() {
    	return this.col;
    }
}

class I_Tetromino extends Tetromino {

	initOrientations() {
		this.orientations.push(new Orientation(-2, 0, -1, 0, 0, 0, 1, 0));
    	this.orientations.push(new Orientation(0, -1, 0, 0, 0, 1, 0, 2));
	}

}

class J_Tetromino extends Tetromino {

	initOrientations() {
		this.orientations.push(new Orientation(1, -1, -1, 0, 0, 0, 1, 0));
	    this.orientations.push(new Orientation(0, -1, 0, 0, 0, 1, 1, 1));
	    this.orientations.push(new Orientation(-1, 0, 0, 0, 1, 0, -1, 1));
	    this.orientations.push(new Orientation(-1, -1, 0, -1, 0, 0, 0, 1));
	}

}

class L_Tetromino extends Tetromino {

	initOrientations() {
		this.orientations.push(new Orientation(-1, -1, -1, 0, 0, 0, 1, 0));
	    this.orientations.push(new Orientation(0, -1, 1, -1, 0, 0, 0, 1));
	    this.orientations.push(new Orientation(-1, 0, 0, 0, 1, 0, 1, 1));
	    this.orientations.push(new Orientation(0, -1, 0, 0, -1, 1, 0, 1));
	}

}

class O_Tetromino extends Tetromino {

	initOrientations() {
		this.orientations.push(new Orientation(-1, 0, 0, 0, -1, -1, 0, -1));
	}
}

class S_Tetromino extends Tetromino {

	initOrientations() {
		this.orientations.push(new Orientation(0, 0, 1, 0, -1, -1, 0, -1));
    	this.orientations.push(new Orientation(0, 1, 0, 0, 1, 0, 1, -1));
	}

}

class T_Tetromino extends Tetromino {

	initOrientations() {
		this.orientations.push(new Orientation(-1, 0, 0, 0, 1, 0, 0, -1));
		this.orientations.push(new Orientation(0, 1, 0, 0, 1, 0, 0, -1));
		this.orientations.push(new Orientation(-1, 0, 0, 0, 1, 0, 0, 1));
		this.orientations.push(new Orientation(0, 1, -1, 0, 0, 0, 0, -1));
	}

}

class Z_Tetromino extends Tetromino {

	initOrientations() {
		this.orientations.push(new Orientation(-1, 0, 0, 0, 0, -1, 1, -1));
    	this.orientations.push(new Orientation(1, 1, 0, 0, 1, 0, 0, -1));
	}

}