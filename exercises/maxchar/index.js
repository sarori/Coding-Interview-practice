// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charMap = {};
	let max = 0;
	let maxChar = "";

	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}
	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}
	return maxChar;
}

console.log(maxChar("Hello"));

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// 주어진 String에서 가장 많은 빈도를 가진 문자를 리턴하라.

// string을 가져와서 key와 value를 가진 object로 변환한다.
// key는 string에서 온 문자들이고 value는 같은 문자들이 string안에 얼마나 있었는지 횟수이다.
// 가장 value값이 큰 key가 가장 많은 빈도를 가진 문자가 된다.

// for...of 명령문은 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복하고
//  각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.
// String에 대해 반복하는 경우

let iterable = "boo";

for (let value of iterable) {
	console.log(value);
}
// "b"
// "o"
// "o"
