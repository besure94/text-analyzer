function isEmpty(testString) {
	return (testString.trim().length === 0);
}

function wordCounter(text) {
	if (isEmpty(text)) {
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

	//step 1: write a function that returns how many times each word is used in a passage of text.
	//step 2: organize the output of words from most used to least used.

function mostUsedWords(text) {
	let textArray = text.toUpperCase().split(" ").sort();
	let wordArray = [];
	let countArray = [];
	// split textArray into unique word array //
	textArray.forEach(function(word) {
		if (!wordArray.includes(word)) {
			wordArray.push(word)
		}
	});
	console.log("textArray: ", textArray);
	console.log("wordArray: ", wordArray);
	let counter = 0;
	// loop through wordArray to compare each word to textArray //
	wordArray.forEach(function(word) {
		// if word = textArray(element), increase counter by 1 //
		textArray.forEach(function(element) {
			if (element === word) {
				counter++;
			}
		});
		countArray.push(counter);
		counter = 0;
	});
	console.log("countArray: ", countArray);
	let result = [];
	wordArray.forEach(function(word, index) {
		result.push(word + ": " + countArray[index])
	});
	console.log("Result before sort: ", result);
	result.sort(function(word1, word2) {
		let num1Array = word1.split(" ");
		let num2Array = word2.split(" ");
		let num1 = parseInt(num1Array[1]);
		let num2 = parseInt(num2Array[1]);
		console.log("word1 ", word1, num1);
		console.log("word2", word2, num2);
		if (num1 > num2) {
			return -1;
		}
		if (num1 < num2) {
			return 1;
		}
		return 0;

	});
	console.log("Sorted result: ", result);
	return result;
}

function handleFormSubmission(event) {
	event.preventDefault();
	const passage = document.getElementById("text-passage").value;
	const usedWords = mostUsedWords(passage);
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