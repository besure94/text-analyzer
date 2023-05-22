function isEmpty(testString) {
	return (testString.trim().length === 0);
}

function wordCounter(inputText) {
	if (isEmpty(text)) {
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
	if (isEmpty(word)) {
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
	if (isEmpty(word) || isEmpty(text)) {
		return null;
	}
	const p = document.createElement("p");
	let textArray = text.split(" ");
	textArray.forEach(function(element, index) {
		if (word === element) {
				const bold = document.createElement("strong");
				bold.append(element);
				p.append(bold);
			} else {
				p.append(element);
			}
			if (index !== (textArray.length - 1)) {
			p.append(" ");
			}
		});
		return p;
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
	let boldedPassage = boldPassage(word, passage);
	if (boldedPassage) {
		document.querySelector("div#bolded-passage").append(boldedPassage);
	} else {
		document.querySelector("div#bolded-passage").innerText = null;
	}
}

window.addEventListener("load", function() {
	document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});