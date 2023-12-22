document.addEventListener('DOMContentLoaded', () => {
    if(getQueryParams('logged') == 'success') {
        loggedIn();
    }
    if (getQueryParams('signup') == 'success') {
        signedUp();
    } else {
        console.log('no');
    }

    function signedUp() {
        const signupSuccess = document.querySelector('.success-signup');
        signupSuccess.style.animation = "successFade 4s 1 forwards";
    }
    function loggedIn() {
        console.log('this bit ran');
        localStorage.setItem('logged', 'true');
        localStorage.setItem('session', getTokenFromUrl());
        const loginSuccess = document.querySelector('.success-login');
        loginSuccess.style.animation = "successFade 4s 1 forwards";
        console.log('logged was success');
    }
    function sendData(event) {
        event.preventDefault();
        const dataToSend = localStorage.getItem('session');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/saveData', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({ data: dataToSend }));
    }
    
    function getTokenFromUrl() {
        return getQueryParams('sessionID');
    }
    function getQueryParams(parameterName) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        return urlSearchParams.get(parameterName);
    }
});