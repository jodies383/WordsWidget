const analyzeSentenceBtn = document.querySelector(".analyzeSentence")
const hideUnderFive = document.querySelector(".hideUnderFive")
const template = document.querySelector(".wordsWidget").innerHTML
const wordsTemplate = Handlebars.compile(template)
let enterSentence = document.querySelector(".enterSentence")
let displaySentence = document.querySelector(".displaySentence")
let displayLength = document.querySelector(".displayLength")
let longestWordDisplay = document.querySelector(".longestWordDisplay")
let listOfSentences = document.querySelector(".listOfSentences")
let sentenceList = []
if (localStorage['sentences']) {
    sentenceList = JSON.parse(localStorage.getItem('sentences'));

}
let displayWords = wordsTemplate({
    sentence: sentenceList.slice(0).slice(-5)
});

function myFunction(evt) {
    enterSentence.value = evt.target.innerHTML
    let enter = enterSentence.value
    let replace = enter.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    let split = replace.split(" ")
    let sentence = ""
    if (enter && split.length >= 5) {

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
        let theWordCount = `there are ${split.length} words in this sentence`   
        displaySentence.innerHTML = sentence;
        displayLength.innerHTML = theWordCount;
    }
    else {
        displaySentence.innerHTML = "no sentence found";
        displayLength.innerHTML = "";
        longestWordDisplay.innerHTML = "";
    }
    let displayWords = wordsTemplate({
        sentence: sentenceList.slice(0).slice(-5)
    });
    listOfSentences.innerHTML = displayWords
}
listOfSentences.addEventListener('click', myFunction)
  
analyzeSentenceBtn.addEventListener('click', () => {
    if (localStorage['sentences']) {
        sentenceList = JSON.parse(localStorage.getItem('sentences'));
    
    }
    let enter = enterSentence.value
    let replace = enter.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    let split = replace.split(" ")
    let sentence = ""
    if (enter && split.length >= 5) {

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
        let theWordCount = `there are ${split.length} words in this sentence`
        sentenceList.push(enter)
        localStorage.setItem('sentences', JSON.stringify(sentenceList));
        displaySentence.innerHTML = sentence;
        displayLength.innerHTML = theWordCount;
    }
    else {
        displaySentence.innerHTML = "no sentence found";
        displayLength.innerHTML = "";
        longestWordDisplay.innerHTML = "";
    }
    let displayWords = wordsTemplate({
        sentence: sentenceList.slice(0).slice(-5)
    });
    listOfSentences.innerHTML = displayWords

})

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
    if (enter && split.length >= 5) {
        if (hideUnderFive.checked === true) {
            const highlightedWords = split.map(word => {
                let filWord = split.filter((words) => {
                    return words.length == string.length;
                });
                if (word.length < 5) {
                    return `<div class="hideItems">${word}</div>`
                }
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
listOfSentences.innerHTML = displayWords

      //limit to last 5
  //arr.slice(Math.max(arr.length - 5, 1))
