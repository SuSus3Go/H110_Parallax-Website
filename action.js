// Select the class bubble
const time = document.getElementsByClassName('bubbles')[0];

if (screen.width < 400) {

    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')
}



window.addEventListener('scroll', function () {

    let value = window.scrollY;   //Get Scroll Value (Mobile - High)

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    //To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

  })

const fishConfigs = [
    { element: fish1, horizontalRange: 200, verticalRange: 50 },
    { element: fish2, horizontalRange: 220, verticalRange: 90 },
    { element: fish3, horizontalRange: 240, verticalRange: 120 },
    { element: fish4, horizontalRange: 260, verticalRange: 60 },
];

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function swimFreely(fish) {
    const xOffset = randomBetween(-fish.horizontalRange, fish.horizontalRange);
    const yOffset = randomBetween(-fish.verticalRange, fish.verticalRange);
    const duration = randomBetween(6, 11);

    fish.element.style.transition = `transform ${duration}s ease-in-out`;
    fish.element.style.transform = `translate(${xOffset}px, ${yOffset}px)`;

    setTimeout(() => swimFreely(fish), duration * 1000);
}

fishConfigs.forEach((fish) => swimFreely(fish));


// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}