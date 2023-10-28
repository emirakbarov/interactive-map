let currentTheme = 'f';
let changeThemeBTN = document.querySelector("#changeTheme");
var r = document.querySelector(":root");
var body = document.body;
const labels = document.querySelectorAll(".labels");

function checkTheme() {
    switch (currentTheme) {
        case 'f':
            r.style.setProperty('--text-primary', '#66666E');
            r.style.setProperty('--bg-secondary', '#9999A1');
            r.style.setProperty('--black', 'hsl(40, 100%, 90%)');
            body.style.background = "#66666E";
            labels.forEach(label => {
                label.style.color = "var(--white-primary)"
            });
            currentTheme = 'l';
            localStorage.setItem("currentTheme", currentTheme);
            console.log(currentTheme);
            break;
        case 'l':
            r.style.setProperty('--text-primary', '#27374D');
            r.style.setProperty('--bg-secondary', '#9DB2BF');
            r.style.setProperty('--black', '#DDE6ED');
            body.style.background = "#27374D";
            labels.forEach(label => {
                label.style.color = "var(--text-primary)";
            });
            currentTheme = 'd';
            localStorage.setItem("currentTheme", currentTheme);
            console.log(currentTheme);
            break;
        case 'd':
            r.style.setProperty('--text-primary', '#05386b');
            r.style.setProperty('--bg-secondary', '#cf142b');
            r.style.setProperty('--black', '#000000');
            body.style.background = "linear-gradient(to right,var(--text-primary), var(--white-primary), var(--bg-secondary)) no-repeat fixed";
            labels.forEach(label => {
                label.style.color = "var(--white-primary)"
            });
            currentTheme = 'f';
            localStorage.setItem("currentTheme", currentTheme);
            console.log(currentTheme);
            break;
        default:
            r.style.setProperty('--text-primary', '#05386b');
            r.style.setProperty('--bg-secondary', '#cf142b');
            r.style.setProperty('--black', '#000000');
            body.style.background = "linear-gradient(to right,var(--text-primary), var(--white-primary), var(--bg-secondary)) no-repeat fixed";
            labels.forEach(label => {
                label.style.color = "var(--white-primary)"
            });
            currentTheme = 'f';
            localStorage.setItem("currentTheme", currentTheme);
            console.log(currentTheme);
            break;
    }
}

changeThemeBTN.addEventListener('click', checkTheme);
checkTheme();

document.addEventListener('DOMContentLoaded', getTheme());

function getTheme() {
    currentTheme = localStorage.getItem("currentTheme");
    currentTheme = localStorage.getItem("currentTheme");
}