const analyzeSentenceBtn = document.querySelector(".analyzeSentence")
const hideCheck = document.querySelector(".hideUnderFive")
const template = document.querySelector(".wordsWidget").innerHTML
const wordsTemplate = Handlebars.compile(template)
const enterSentence = document.querySelector(".enterSentence")
const displaySentence = document.querySelector(".displaySentence")
const displayLength = document.querySelector(".displayLength")
const errorMessage = document.querySelector(".errorMessage")
const listOfSentences = document.querySelector(".listOfSentences")
const dot = document.querySelector(".dot")
const range = document.getElementById("customRange2")
const output = document.getElementById("output");
const wordsWidgetInst = WordsWidget();

let displayWords = wordsTemplate({
    sentence: wordsWidgetInst.returnSentenceList().slice(0).slice(-5)
});
output.innerHTML = range.value;

setTimeout(() => { errorMessage.innerHTML = "" }, 2000);

range.oninput = function () {
    output.innerHTML = this.value;
}

analyzeSentenceBtn.addEventListener('click', () => {
    setTimeout(() => { errorMessage.innerHTML = "" }, 2000);

    let enter = enterSentence.value
    wordsWidgetInst.analyzeSentence(enter, range.value)

    displaySentence.innerHTML = wordsWidgetInst.returnAnalyzedSentence();
    displayLength.innerHTML = wordsWidgetInst.returnTheWordCount();
    errorMessage.innerHTML = wordsWidgetInst.errorMessage()
    dot.classList.add(wordsWidgetInst.theDot(enter))

    let displayWords = wordsTemplate({
        sentence: wordsWidgetInst.returnSentenceList().slice(0).slice(-5)
    });
    listOfSentences.innerHTML = displayWords

})
hideCheck.addEventListener('click', () => {
    setTimeout(() => { errorMessage.innerHTML = "" }, 2000);

    let enter = enterSentence.value
    wordsWidgetInst.hideUnderFive(enter, hideCheck.checked, range.value)
    displaySentence.innerHTML = wordsWidgetInst.returnAnalyzedSentence();
    displayLength.innerHTML = wordsWidgetInst.returnTheWordCount();
    dot.classList.add(wordsWidgetInst.theDot(enter))
    errorMessage.innerHTML = wordsWidgetInst.errorMessage()

    let displayWords = wordsTemplate({
        sentence: wordsWidgetInst.returnSentenceList().slice(0).slice(-5)
    });
    listOfSentences.innerHTML = displayWords

});
listOfSentences.addEventListener('click', (evt) => {
    setTimeout(() => { errorMessage.innerHTML = "" }, 2000);

    enterSentence.value = evt.target.innerHTML
    let enter = enterSentence.value
    wordsWidgetInst.highlightWord(enter, range.value)
    
    displaySentence.innerHTML = wordsWidgetInst.returnAnalyzedSentence();
    displayLength.innerHTML = wordsWidgetInst.returnTheWordCount();
    errorMessage.innerHTML = wordsWidgetInst.errorMessage()
     dot.classList.remove("orange")
     dot.classList.remove("green")
     dot.classList.add(wordsWidgetInst.theDot(enter))

    let displayWords = wordsTemplate({
        sentence: wordsWidgetInst.returnSentenceList().slice(0).slice(-5)
    });
    listOfSentences.innerHTML = displayWords
})
listOfSentences.innerHTML = displayWords

