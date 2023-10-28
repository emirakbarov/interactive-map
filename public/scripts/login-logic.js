const signupPage = document.querySelector("#signupPage");
// const openSignup = document.querySelector("#signupBTN");
const closeSignup = signupPage.find("closeBTN");

signupPage.addEventListener("animationend", (event) => {
    if (event.animationDirection == "shrink") {
        signupPage.style.display = "none";
    }
});
closeSignup.addEventListener('click', (event) => {
    event.preventDefault();
    signupPage.style.animation = "shrink 0.1s 0s 1 forwards";
});

const inputFields = document.querySelectorAll('.code-input input');

const loginPage = document.querySelector("#loginPage");
// const openLogin = docum
const closeLogin = loginPage.find("#closeBTN");

loginPage.addEventListener("animationend", (event) => {
    if (event.animationDirection == "shrink") {
        loginPage.style.display = "none";
    }
});
closeLogin.addEventListener('click', (event) => {
    event.preventDefault();
    loginPage.style.animation = "shrink 0.1s 0s 1 forwards";
});

inputFields.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        if (/^\d$/.test(event.target.value)) {
            if (index < inputFields.length - 1) {
                inputFields[index + 1].focus();
            }
        } else if (event.target.value === '' && index > 0) {
            inputFields[index - 1].focus();
        }
    });
});