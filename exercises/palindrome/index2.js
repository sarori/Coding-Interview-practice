function palindrome(str) {
	return str.split("").every((character, idx) => {
		return character === str[str.length - idx - 1];
	});
}
