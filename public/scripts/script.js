document.addEventListener('DOMContentLoaded', () => {
    if (getQueryParams('signup') == 'success') {
        console.log('start');
        localStorage.setItem('logged', true);
        console.log('signup');
        console.log('up to message');
        const successDiv = document.createElement('div');

        successDiv.className = 'error-message success';

        successDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>You have successfully logged in!';

        document.body.appendChild(successDiv);
        console.log('faded');
        const successPrompt = document.getElementById('succes-signup');
        successPrompt.style.animation = "successFade 4s 1 forwards";
    } else {
        console.log('no');
    }

    function getQueryParams(parameterName) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        return urlSearchParams.get(parameterName);
    }
});