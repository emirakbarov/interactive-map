document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.settingsPage').addEventListener('submit', sendData);
    if(getQueryParams('logged') == 'success') {
        loggedIn();
    } else if (getQueryParams('logged') == 'failed'){
        document.getElementById('failed-login').style.animation = "successFade 4s 1 forwards";
        console.log('thus far');
    }
    if (getQueryParams('signup') == 'success') {
        signedUp();
    } else if (getQueryParams('signup') == 'failed') {
        document.getElementById('failed-signup').style.animation = "successFade 4s 1 forwards";
        console.log('thus far 2');
    }

    function signedUp() {
        const signupSuccess = document.getElementById('success-signup');
        signupSuccess.style.animation = "successFade 4s 1 forwards";
    }
    function loggedIn() {
        localStorage.setItem('logged', true);
        localStorage.setItem('session', getTokenFromUrl());
        const loginSuccess = document.getElementById('success-login');
        loginSuccess.style.animation = "successFade 4s 1 forwards";
    }
    function sendData(event) {
        event.preventDefault();
        const dataToSend = localStorage.getItem('session');    
        const formData = new FormData(event.target);
        formData.append('data', dataToSend);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/update', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(Object.fromEntries(formData)));
    }
    
    function getTokenFromUrl() {
        return getQueryParams('sessionID');
    }
    function getQueryParams(parameterName) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        return urlSearchParams.get(parameterName);
    }
});