const analyzeSentenceBtn = document.querySelector(".analyzeSentence")
const hideUnderFive = document.querySelector(".hideUnderFive")
const template = document.querySelector(".wordsWidget").innerHTML
const wordsTemplate = Handlebars.compile(template)
let enterSentence = document.querySelector(".enterSentence")
let displaySentence = document.querySelector(".displaySentence")
let displayLength = document.querySelector(".displayLength")
let longestWordDisplay = document.querySelector(".longestWordDisplay")
let listOfSentences = document.querySelector(".listOfSentences")
let list = []

let displayWords = wordsTemplate({
    sentence: list
});

analyzeSentenceBtn.addEventListener('click', () => {
    let enter = enterSentence.value
    let longWordArr = []
    let replace = enter.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    let split = replace.split(" ")
    let sentence = ""
    if (enter) {

        let string = ""

        var longestWord = 0;
        for (var i = 0; i < split.length; i++) {
            if (split[i].length > longestWord) {
                longestWord = split[i].length;
                string = split[i]
            }
        }


        const highlightedWords = split.map(word => {
            let filWord = split.filter((words) => {
                return words.length == string.length;
              });
            if (filWord.includes(word)) {
                return `<mark2>${word}</mark2>`
            }
            else if (!filWord.includes(word) && word.length > 4) {
                return `<mark>${word}</mark>`
            }
            return word
        })
        for (let i = 0; i < highlightedWords.length; i++) {
            sentence += highlightedWords[i] + " ";
        }
        let theWordCount = `there are ${split.length} words in your sentence`
        // let longestWordCount = `the longest word is <mark2>${longWordArr}</mark2>`
        list.push({ sentences: sentence, wordCount: theWordCount })
        // console.log(displayWords);
        displaySentence.innerHTML = sentence;
        displayLength.innerHTML = theWordCount;
        // longestWordDisplay.innerHTML = longestWordCount;
    }
    else {
        displaySentence.innerHTML = "no sentence found";
        displayLength.innerHTML = "";
        longestWordDisplay.innerHTML = "";
    }
    listOfSentences.innerHTML = displayWords

})

console.log(displayWords);

hideUnderFive.addEventListener('click', () => {
    let enter = enterSentence.value
    let replace = enter.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    let split = replace.split(" ")
    let sentence = ""
    let string = ""

        var longestWord = 0;
        for (var i = 0; i < split.length; i++) {
            if (split[i].length > longestWord) {
                longestWord = split[i].length;
                string = split[i]
            }
        }
    if (enter) {
        if (hideUnderFive.checked === true) {
            const highlightedWords = split.map(word => {
                let filWord = split.filter((words) => {
                    return words.length == string.length;
                  });
                  if (filWord.includes(word)) {
                    return `<mark2>${word}</mark2>`
                }
                if (word.length < 5) {
                    return `<div class="hideItems">${word}</div>`
                }
                if (!filWord.includes(word) && word.length > 4) {
                    return `<mark>${word}</mark>`
                }
                return word
            })

            for (let index = 0; index < highlightedWords.length; index++) {
                sentence += highlightedWords[index] + " ";

            }
            displaySentence.innerHTML = sentence;
        } else {
            const highlightedWords = split.map(word => {
                let filWord = split.filter((words) => {
                    return words.length == string.length;
                  });
                  if (filWord.includes(word)) {
                    return `<mark2>${word}</mark2>`
                }
                else if (!filWord.includes(word) && word.length > 4) {
                    return `<mark>${word}</mark>`
                }
                return word
            })
            for (let index = 0; index < highlightedWords.length; index++) {
                sentence += highlightedWords[index] + " ";
            }
            displaySentence.innerHTML = sentence;
        }
    } else {
        displaySentence.innerHTML = "no sentence found";
        displayLength.innerHTML = "";

    }
});
      //limit to last 5
  //arr.slice(Math.max(arr.length - 5, 1))
