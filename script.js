
#let popup = document.querySelector("#screenTooSmallPrompt");
let elementsDisabled = document.querySelector("#disableOtherElements");
let popupUp = false;

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