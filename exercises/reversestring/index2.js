//for loop

function reverse(str) {
	let reversed = "";
	var len = str.length;
	for (var i = 0; i < len; i++) {
		reversed += str[len - 1 - i];
	}
	return reversed;
}

function reverse(str) {
	let reversed = "";
	for (let character of str) {
		reversed = character + reversed;
	}
	return reversed;
}
