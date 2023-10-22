
let popup = document.querySelector("#screenTooSmallPrompt");
let elementsDisabled = document.querySelector("#disableOtherElements");
let popupUp = false;
let windowClosed = false;
let closePromptBTN = document.querySelector("#closePromptBTN");


let currentTheme;
let lastTheme;
let changeThemeBTN = document.querySelector("#changeTheme");
var r = document.querySelector(":root");
var body = document.body;

function checkTheme() {
    switch (currentTheme) {
        case 'f':
            r.style.setProperty('--text-primary', '#66666E');
            r.style.setProperty('--bg-secondary', '#9999A1');
            r.style.setProperty('--black', 'hsl(40, 100%, 90%)');
            body.style.background = "#66666E";
            lastTheme = currentTheme;
            currentTheme = 'l';
            console.log(currentTheme);
            break;
        case 'l':
            r.style.setProperty('--text-primary', '#27374D');
            r.style.setProperty('--bg-secondary', '#9DB2BF');
            r.style.setProperty('--black', '#DDE6ED');
            body.style.background = "#27374D";
            lastTheme = currentTheme;
            currentTheme = 'd';
            console.log(currentTheme);
            break;
        case 'd':
            r.style.setProperty('--text-primary', '#05386b');
            r.style.setProperty('--bg-secondary', '#cf142b');
            r.style.setProperty('--black', '#000000');
            body.style.background = "linear-gradient(to right,var(--text-primary), var(--white-primary), var(--bg-secondary)) no-repeat fixed";
            lastTheme = currentTheme;
            currentTheme = 'f';
            console.log(currentTheme);
            break;
        default:
            r.style.setProperty('--text-primary', '#05386b');
            r.style.setProperty('--bg-secondary', '#cf142b');
            r.style.setProperty('--black', '#000000');
            body.style.background = "linear-gradient(to right,var(--text-primary), var(--white-primary), var(--bg-secondary)) no-repeat fixed";
            lastTheme = 'd';
            currentTheme = 'f';
            console.log(currentTheme);
    }
}

changeThemeBTN.addEventListener('click', checkTheme);
checkTheme();

const buttons = document.querySelectorAll(".nav-link");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const target = button.getAttribute("target");
        if (target != "null") {
            window.location.href = `${target}?theme=${lastTheme}`;
            console.log("hello");
        }
    });
});

function getQueryParam(parameterName) {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(parameterName);
}

document.addEventListener("DOMContentLoaded", () => {
    const theme = getQueryParam('theme');
    if (theme != "") {
        currentTheme = lastTheme = theme;
        checkTheme();
    }
});


const backBTN = document.querySelector("#backButton");
const nextBTN = document.querySelector("#nextButton");

const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");

const slide1Objs = {
    h3: slide1.querySelector("h3"),
    p: slide1.querySelector("p"),
}
const slide2Objs = {
    h3: slide2.querySelector("h3"),
    p: slide2.querySelector("p"),
}

const slideData = [
    {
        id: 1,
        h3: "slide1",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
    {
        id: 2,
        h3: "slide2",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
    {
        id: 3,
        h3: "slide3",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
    {
        id: 4,
        h3: "slide4",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
    {
        id: 5,
        h3: "slide5",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
    {
        id: 6,
        h3: "slide6",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
    {
        id: 7,
        h3: "slide7",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
    {
        id: 8,
        h3: "slide8",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
    {
        id: 9,
        h3: "slide9",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
    {
        id: 10,
        h3: "slide10",
        p: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus blanditiis maiores vel, veniam alias sit modi necessitatibus quos quis, atque voluptas molestias. Animi debitis molestias quidem ex placeat consectetur inventore.",
        img: "../images/flagOfFrance.png"
    },
]

let slideOn = "slide1";
let currentSlideID = 1;

function getSlideById(id) {
    return slideData.find(slide => slide.id == id);
}

function updateSlideContent(slide) {
    const newSlide = getSlideById(slide);
    console.log(newSlide.id);
    if (slideOn == "slide1") {
        slide2Objs.h3.textContent = newSlide.h3;
        console.log(newSlide.h3);
        slide2Objs.p.textContent = newSlide.p;
    }
    else {
        slide1Objs.h3.textContent = newSlide.h3;
        slide1Objs.p.textContent = newSlide.p;
    }
    currentSlideID = slide;
}

slide1.addEventListener("animationend", (event) => {
    if (event.animationName == "slideOutLeft" || event.animationName == "slideOutRight") {
        slide1.style.display = "none";
    }
});
slide2.addEventListener("animationend", (event) => {
    if (event.animationName == "slideOutLeft" || event.animationName == "slideOutRight") {
        slide2.style.display = "none";
    }
});

backBTN.addEventListener('click', () => {
    console.log("h");
    if (currentSlideID > 1) {
        currentSlideID--;
        updateSlideContent(currentSlideID);
        switch (slideOn) {
            case "slide1":
                slide1.style.animation = "slideOutRight 0.9s ease-in 0s 1";
                slide2.style.display = "flex";
                slide2.style.animation = "slideInLeft 0.9s ease-in 0s 1"
                console.log("n");
                slideOn = "slide2";
                break;
            case "slide2":
                slide2.style.animation = "slideOutRight 0.9s ease-in 0s 1";
                slide1.style.display = "flex";
                slide1.style.animation = "slideInLeft 0.9s ease-in 0s 1"
                console.log("j");
                slideOn = "slide1"
                break;
        }
    }
});

nextBTN.addEventListener('click', () => {
    console.log('l');
    if (currentSlideID < slideData.length) {
        currentSlideID++;
        updateSlideContent(currentSlideID);
        switch (slideOn) {
            case "slide1":
                slide1.style.animation = "slideOutLeft 0.9s ease-in 0s 1";
                slide2.style.display = "flex";
                slide2.style.animation = "slideInRight 0.9s ease-in 0s 1";
                console.log("l");
                slideOn = "slide2";
                break;
            case "slide2":
                slide2.style.animation = "slideOutLeft 0.9s ease-in 0s 1";
                slide1.style.display = "flex";
                slide1.style.animation = "slideInRight 0.9s ease-in 0s 1";
                console.log("f");
                slideOn = "slide1"
                break;
        }
    }
});



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