const analyzeSentenceBtn = document.querySelector(".analyzeSentence")
let enterSentence = document.querySelector(".enterSentence")
let displaySentence = document.querySelector(".displaySentence")
let displayLength = document.querySelector(".displayLength")

analyzeSentenceBtn.addEventListener('click', () => {
    let enter = enterSentence.value
    let split = enter.split(" ")
    let sentence = ""
    // let list = []
    // list.push(enter)
    const highlightedWords = split.map(word => {
        if (word.length > 4) {
            return `<mark>${word}</mark>`
        }
        return word
    })
    for (let index = 0; index < highlightedWords.length; index++) {
        sentence += highlightedWords[index] + " ";
    }
    // console.log(highlightedWords);
    // console.log(sentence);
    displaySentence.innerHTML = sentence;
    displayLength.innerHTML = `there are ${split.length} words in your sentence`;
    console.log(displaySentence.innerHTML);
})