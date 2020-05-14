function reverse(str) {
	return str
		.split("")
		.reduce((reversed, character) => character + reversed, "");
}
