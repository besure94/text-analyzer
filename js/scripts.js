function wordCounter(text) {
	if (text.trim().length === 0) {
		return 0;
	}
	let wordCount = 0;
	const textArray = text.split(" ");
	textArray.forEach(function(element) {
		if(!Number(element)) {
			wordCount++;
		}
	});
	return wordCount;
}

const text = "hello there";
console.log(wordCounter(text));