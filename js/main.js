document.addEventListener("DOMContentLoaded", function () {
    DisplaySnow();
});

/* atm resizing the window might break elements and their size but I am way too stupid to find a solution */
function DisplaySnow() {
    const starContainer = document.body;

    for (let i = 0; i < 50; i++) {
        const star = document.createElement("div");
        star.className = "snow";
        star.style.left = Math.random() * window.innerWidth*1.5 + "px";
        star.style.animationDuration = (Math.random() * 2 + 1) + "s";
        starContainer.appendChild(star);
    }
}

/* dark/light mode switch */
function toggleBackground() {
    const toggleIcon = document.getElementById('toggle-icon');
    const logo = document.getElementById('logo');
    const expand = document.getElementById('expand');

    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        logo.src = 'images/icon.png';
        expand.src = 'images/expand.svg';
        document.documentElement.style.setProperty('--line', '#FFF');
        toggleIcon.src = 'images/night.svg';
    } else {
        document.body.classList.add('light');
        logo.src = 'images/light/icon.png';
        expand.src = 'images/light/expand.svg';
        document.documentElement.style.setProperty('--line', '#EBF3E8');
        toggleIcon.src = 'images/sun.svg';
    }
}

/* hamburger menu functions */
function HamburgerON() {
    var menu = document.getElementById('hamburger');
    menu.style.display = 'block';
}

function HamburgerOFF() {
    var menu = document.getElementById('hamburger');
    menu.style.display = 'none';
}