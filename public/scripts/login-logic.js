const openSignup = document.querySelector("#settingsBTN");
const openSignupFromLogin = document.querySelector(".goToSignup");
const signupPage = document.querySelector(".signupPage");
const closeSignup = document.querySelector(".closeSignup");
const errorMessage = document.querySelector(".error-message");

openSignup.addEventListener('click', () => {
    signupPage.style.animation = "grow 0.1s 0s 1 forwards";
    errorMessage.style.animation = "fadeIn 0.8s 0s 1 forwards";
    errorMessage.style.visibility = "visible";
    setTimeout(() => {
        errorMessage.style.animation = "fadeOut 0.8s 0s 1 forwards";
    }, 2000);
});
openSignupFromLogin.addEventListener('click', () => {
    errorMessage.style.opacity = "0";
    errorMessage.style.visibility = "hidden";
    console.log(errorMessage.style.opacity);
    signupPage.style.animation = "grow 0.1s 0s 1 forwards";
    loginPage.style.animation = "shrink 0.1s 0s 1 forwards";
});

closeSignup.addEventListener('click', (event) => {
    event.preventDefault();
    signupPage.style.animation = "shrink 0.1s 0s 1 forwards";
    errorMessage.style.opacity = "0";
    errorMessage.style.visibility = "hidden";
});

const loginPage = document.querySelector(".loginPage");
const openLoginFromSignup = document.querySelector(".goToLogin");
const closeLogin = loginPage.querySelector(".closeLogin");

openLoginFromSignup.addEventListener('click', () => {
    errorMessage.style.opacity = "0";
    errorMessage.style.visibility = "hidden";
    loginPage.style.animation = "grow 0.1s 0s 1 forwards";
    signupPage.style.animation = "shrink 0.1s 0s 1 forwards";
});

closeLogin.addEventListener('click', (event) => {
    event.preventDefault();
    loginPage.style.animation = "shrink 0.1s 0s 1 forwards";
});

const inputFields = document.querySelectorAll('.code-input input');

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