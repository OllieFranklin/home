class GameState {

	constructor(board, nextPiece, level, lines) {
		/**
		 * String[][], where each string is the letter
		 * corresponding to a tetromino shape (e.g. "T", "L", etc.).
		 */
		this.board = board;

		/**
		 * String corresponding to next tetromino shape (e.g. "T", "L", etc.)
		 */
		this.nextPiece = nextPiece;

		this.level = level;

		this.lines = lines;
	}

}