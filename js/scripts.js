function wordCounter(inputText) {
	if (inputText.trim().length === 0) {
		return 0;
	}
	let wordCount = 0;
	const textArray = inputText.split(" ");
	textArray.forEach(function(element) {
		if(!Number(element)) {
			wordCount++;
		}
	});
	return wordCount;
}

const text2 = "hello there";
wordCounter("");
// console.log(wordCounter("hi there 77 19"));
// console.log("Word count: ", wordCounter(text2));

function numberOfOccurrencesInText(word, text) {
	const textArray = text.split(" ");
	let wordCount = 0;
	textArray.forEach(function(element) {
		if (element.toLowerCase().includes(word.toLowerCase())) {
			wordCount++
		}
	});
	return wordCount;
}

const text = "red blue red red red green";
const word = "red";
console.log("Occurrence count: ", numberOfOccurrencesInText(word, text));

function omitOffensiveTerms(passage, offensiveTerms) {
	const passageArray = passage.split(" ");
	let newPassage = "The four men split up and walked off in different directions.";
	passageArray.forEach(function(element) {
		if (element.trim()) {
			newPassage;
		}
	});
	return newPassage;
}

const passage = "zoinks muppeteer biffaroni loopdaloop The four men split up and walked off in different directions.";
const offensiveTerms = "zoinks muppeteer biffaroni loopdaloop";
console.log("New passage: ", omitOffensiveTerms(passage, offensiveTerms));