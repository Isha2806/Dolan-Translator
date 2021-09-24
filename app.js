var textInput = document.querySelector("#text-input");

var outputDiv = document.querySelector("#output-div");

var translateButton = document.querySelector("#trans-button");

var clearButton = document.querySelector("#clear-button");
function clickHandler(event) {
    if (textInput.value !== "") {
        executeFetchCall(textInput.value)
    }
    else alert("Please enter text");
}

clearButton.addEventListener('click',clearClickHandler)
translateButton.addEventListener('click', clickHandler);