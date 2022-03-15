const analyzeSentenceBtn = document.querySelector(".analyzeSentence")
let enterSentence = document.querySelector(".enterSentence")
let displaySentence = document.querySelector(".displaySentence")
let displayLength = document.querySelector(".displayLength")

analyzeSentenceBtn.addEventListener('click', () => {
    let enter = enterSentence.value
    let split = enter.split(" ")
   
    const highlightedWords = split.map(word => {
        if (word.length > 4) {
            return (`<mark>${word}<mark>`)
        }
    })
 
    displaySentence.innerHTML = highlightedWords;
    displayLength.innerHTML = `there are ${split.length} words in your sentence`;
})