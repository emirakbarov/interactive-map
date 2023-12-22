const openSignup = document.querySelector("#settingsBTN");
const openSignupFromLogin = document.querySelector(".goToSignup");
const signupPage = document.querySelector(".signupPage");
const closeSignup = document.querySelector(".closeSignup");
const errorMessage = document.querySelector(".fail");
const closeSettings = document.querySelector(".closeSettings");
const settingsPage = document.querySelector(".settingsPage");
const logOut = document.querySelector('.logOut');
const logOutSuccess = document.getElementById('sucess-logout');
let signupOpen = false;
let loginOpen = false;
let settingsOpen = false;

logOut.addEventListener('click', () => {
    localStorage.setItem('logged', 'false');
    closeSettingsFunc();
    logOutSuccess.style.animation = "successFade 4s 1 forwards";
});

openSignup.addEventListener('click', () => {
    console.log(localStorage.getItem('logged'));
    if (localStorage.getItem('logged') == 'true') {
        openSettingsFunc();
        closeSignupFunc() 
        closeLoginFunc();
    } else {
        openSignupFunc();
        closeSettingsFunc();
        closeLoginFunc();
        errorMessage.style.animation = "successFade 4s forwards";
    }
});

closeSettings.addEventListener('click', (event) => {
    event.preventDefault();
    closeSettingsFunc();
});

openSignupFromLogin.addEventListener('click', () => {
    errorMessage.style.opacity = "0";
    errorMessage.style.visibility = "hidden";
    console.log(errorMessage.style.opacity);
    openSignupFunc();
    closeLoginFunc();
});

closeSignup.addEventListener('click', (event) => {
    event.preventDefault();
    closeSignupFunc();
    errorMessage.style.opacity = "0";
    errorMessage.style.visibility = "hidden";
});

const loginPage = document.querySelector(".loginPage");
const openLoginFromSignup = document.querySelector(".goToLogin");
const closeLogin = loginPage.querySelector(".closeLogin");

openLoginFromSignup.addEventListener('click', () => {
    errorMessage.style.opacity = "0";
    errorMessage.style.visibility = "hidden";
    openLogin();
    closeSignupFunc();
});

closeLogin.addEventListener('click', (event) => {
    event.preventDefault();
    closeLoginFunc();
});

function closeLoginFunc() {
    if (loginOpen == true) {
        loginPage.style.animation = "shrink 0.1s 0s 1 forwards";
        loginOpen = false;
    }
}
function openLogin() {
    if (loginOpen == false) {
        loginPage.style.animation = "grow 0.1s 0s 1 forwards";
        loginOpen = true;
    }
}
function closeSettingsFunc() {
    if (settingsOpen == true) {
        settingsPage.style.animation = "shrink 0.1s 0s 1 forwards";
        settingsOpen = false;
    }
}
function openSettingsFunc() {
    if (settingsOpen == false) {
        settingsPage.style.animation = "grow 0.1s 0s 1 forwards";
        settingsOpen = true;
    }
}
function closeSignupFunc() {
    if (signupOpen == true) {
        signupPage.style.animation = "shrink 0.1s 0s 1 forwards";
        signupOpen = false;
    }
}
function openSignupFunc() {
    if (signupOpen == false) {
        signupPage.style.animation = "grow 0.1s 0s 1 forwards";
        signupOpen = true;
    }
}