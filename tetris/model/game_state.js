class GameState {

	constructor(board, nextPiece, level, lines) {
		/**
		 * String[][], where each string is the letter
		 * corresponding to a tetromino shape (e.g. "T", "L", etc.).
		 * The string " " respresents an empty cell
		 */
		this.board = board;

		/**
		 * Takes the same format as this.board, representing the shape of
		 * a tetromino in its initial orientation (will be either a 3x2 or 
		 * 4x1 String[][])
		 */
		this.nextPiece = nextPiece;

		this.level = level;

		this.lines = lines;
	}

}