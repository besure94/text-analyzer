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

function numberOfOccurrencesInText(word, text) {
	if (word.trim().length === 0) {
		return 0;
	}
	const textArray = text.split(" ");
	let wordCount = 0;
	textArray.forEach(function(element) {
		if (element.toLowerCase().includes(word.toLowerCase())) {
			wordCount++
		}
	});
	return wordCount;
}

function boldPassage(word, text) {
	if ((text.trim().length === 0) || (word.trim().length === 0)) {
		return null;
	}
}

// Practice function for omitting words from passage//

// function omitOffensiveTerms(passage, offensiveTerms) {
// 	const passageArray = passage.split(" ");
// 	let newPassage = "The four men split up and walked off in different directions.";
// 	passageArray.forEach(function(element) {
// 		if (element.trim()) {
// 			newPassage;
// 		}
// 	});
// 	return newPassage;
// }

// const passage = "zoinks muppeteer biffaroni loopdaloop The four men split up and walked off in different directions.";
// const offensiveTerms = "zoinks muppeteer biffaroni loopdaloop";
// console.log("New passage: ", omitOffensiveTerms(passage, offensiveTerms));

function handleFormSubmission(event) {
	event.preventDefault();
	const passage = document.getElementById("text-passage").value;
	const word = document.getElementById("word").value;
	const wordCount = wordCounter(passage);
	const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
	document.getElementById("total-count").innerText = wordCount;
	document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
	document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});