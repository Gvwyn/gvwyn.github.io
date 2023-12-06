document.addEventListener("DOMContentLoaded", function () {
    DisplaySnow();
});

/* atm resizing the window might break elements and their size but I am way too stupid to find a solution */
function DisplaySnow() {
    const starContainer = document.body;

    for (let i = 0; i < 150; i++) {
        const star = document.createElement("div");
        star.className = "snow";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDuration = (Math.random() * 2 + 1) + "s";
        starContainer.appendChild(star);
    }
}

function toggleBackground() {
    const toggleIcon = document.getElementById('toggle-icon');

    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        toggleIcon.src = 'images/night.svg';
    } else {
        document.body.classList.add('light');
        toggleIcon.src = 'images/sun.svg';
    }
}

function HamburgerON() {
    var menu = document.getElementById('hamburger');
    menu.style.display = 'block';
}

function HamburgerOFF() {
    var menu = document.getElementById('hamburger');
    menu.style.display = 'none';
}