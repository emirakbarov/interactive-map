
let popup = document.querySelector("#screenTooSmallPrompt");
let elementsDisabled = document.querySelector("#disableOtherElements");
let popupUp = false;
let windowClosed = false;
let closePromptBTN = document.querySelector("#closePromptBTN");

function checkWindowSize() {
    if (window.innerWidth < 580) {
        elementsDisabled.style.display = "block";
        popup.style.display = "block";
        popupUp = true;
    }
    else {
        elementsDisabled.style.display = "none";
        popup.style.display = "none";
    }
}

window.addEventListener("resize", checkWindowSize);
checkWindowSize();

closePromptBTN.addEventListener('click', () => {
    popup.style.display = "none";
    elementsDisabled.stye.display = "none";
});