
let popup = document.querySelector("#screenTooSmallPrompt");
let elementsDisabled = document.querySelector("#disableOtherElements");
let popupUp = false;
let windowClosed = false;
let closePromptBTN = document.querySelector("#closePromptBTN");

const buttons = document.querySelectorAll(".nav-link");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("target");
        if (target != "null") {
            window.location.href = `${target}?theme=${lastTheme}`;
            console.log("hello");
        }
        else {
            if (button.id == "signupBTN") {
                signupPage.style.display = "flex";
                signupPage.style.animation = "grow 0.1s 0s 1 forwards";
            }
            else if (button.id == "goToLogin"
        }
    });
});