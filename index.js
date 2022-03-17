const analyzeSentenceBtn = document.querySelector(".analyzeSentence")
const hideUnderFive = document.querySelector(".hideUnderFive")
let enterSentence = document.querySelector(".enterSentence")
let displaySentence = document.querySelector(".displaySentence")
let displayLength = document.querySelector(".displayLength")
let longestWordDisplay = document.querySelector(".longestWordDisplay")


analyzeSentenceBtn.addEventListener('click', () => {
    let enter = enterSentence.value
    let replace = enter.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    let split = replace.split(" ")
    let sentence = ""
    let list = []
    if (enter) {
        const longestWord = () => {
          
            //limit to last 5
            //arr.slice(Math.max(arr.length - 5, 1))
            let sortedWord = split.sort((shortest, longest) => {
                return longest.length - shortest.length;
            })
            return sortedWord[0];
        }
        const highlightedWords = split.map(word => {

            if (word.length > 4) {
                return `<mark>${word}</mark>`
            }
            return word

        })
        for (let index = 0; index < highlightedWords.length; index++) {
            sentence += highlightedWords[index] + " ";
        }
        let theWordCount = `there are ${split.length} words in your sentence`
        let longestWordCount = `the longest word is <mark2>${longestWord()}</mark2>`
        list.push({sentences: sentence, wordCount: theWordCount, longWord: longestWordCount})
        console.log(list);
        displaySentence.innerHTML = sentence;
        displayLength.innerHTML = theWordCount;
        longestWordDisplay.innerHTML = longestWordCount;
    }
    else {
        displaySentence.innerHTML = "no sentence found";
        displayLength.innerHTML = "";
        longestWordDisplay.innerHTML = "";
    }

})


hideUnderFive.addEventListener('click', () => {
    let enter = enterSentence.value
    let replace = enter.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    let split = replace.split(" ")
    let sentence = ""
    if (enter) {
        if (hideUnderFive.checked === true) {
            const highlightedWords = split.map(word => {
                if (word.length < 5) {
                    return `<div class="hideItems">${word}</div>`
                }
                if (word.length > 4) {
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
                if (word.length > 4) {
                    return `<mark>${word}</mark>`
                }
                return word
            })
            for (let index = 0; index < highlightedWords.length; index++) {
                sentence += highlightedWords[index] + " ";
            }
            displaySentence.innerHTML = sentence;
            displayLength.innerHTML = `there are ${split.length} words in your sentence`;


        }
    } else {
        displaySentence.innerHTML = "no sentence found";
        displayLength.innerHTML = "";

    }
});

