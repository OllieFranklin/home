class Textures {

	static textureMap = Textures.getTextureMap();

	static getTextureMap() {
		const output = new Map();
		const tetriminoTypes = ["I", "J", "L", "O", "S", "T", "Z"];
		for (let i = 0; i < tetriminoTypes.length; i++) {
			const texture = document.getElementById(tetriminoTypes[i] + "_Tetromino_default");
			output.set(tetriminoTypes[i], texture);
		}

		return output;
	}

	static hasTexture(tetrominoString) {
		return this.textureMap.has(tetrominoString);
	}

	static getTexture(tetrominoString) {
		return this.textureMap.get(tetrominoString);
	}
}