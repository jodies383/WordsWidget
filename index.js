const analyzeSentenceBtn = document.querySelector(".analyzeSentence")
const hideUnderFive = document.querySelector(".hideUnderFive")
let enterSentence = document.querySelector(".enterSentence")
let displaySentence = document.querySelector(".displaySentence")
let displayLength = document.querySelector(".displayLength")

analyzeSentenceBtn.addEventListener('click', () => {
    let enter = enterSentence.value
    let replace = enter.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    let split = replace.split(" ")
    let sentence = ""
    if (enter) {
        const longestWord = () => {
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
        for (let index = 0; index < longestWord().length; index++) {
            sentence += longestWord()[index] + " ";
        }
        displaySentence.innerHTML = sentence;
        displayLength.innerHTML = `there are ${split.length} words in your sentence`;
    }
    else {
        displaySentence.innerHTML = "no sentence found";
    }
    enter = ""
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
    }
});

