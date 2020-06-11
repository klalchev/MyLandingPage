/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const sections = document.querySelectorAll('section');
const navigation = document.getElementById('navbar__list');
const pars = document.getElementsByTagName('p');
const divs = document.getElementsByClassName('landing__container');

/**
 *End Global Variables
*/

/**
 * Build Dynamic Nav -- START
*/

// const startingTime = performance.now (); //check the performance of this code block
const fragment = document.createDocumentFragment(); // using a DocumentFragment to speed up performance

for (const section of sections){
    const navigationUl = document.createElement('li');
    navigationUl.innerHTML = `<a class="menu__link ${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`; //section.dataset.nav extracts the data-nav attribute

    fragment.appendChild(navigationUl);
}

navigation.appendChild(fragment); // reflow and repaint here --once! Without the fragment would have 4 reflows and repaints (1 for each loop iteration)
// const endingTime = performance.now ();
// console.log('This code took ' + (endingTime - startingTime) + ' milliseconds.');

/**
 * Build Dynamic Nav-- END
 */


/*
 * Start Helper Functions
*/

// Add class 'active' to section when near top of viewport
function makeActiv () {
    for (let sec of sections) {
        let box = sec.getBoundingClientRect();  // get coordinates of each section element
        let link = sec.id;
        let uLink = document.querySelector(`.${link}`);

        if (box.top <= 150 && box.bottom >= 150) {  // if box-top coordinate (extracted via getBoundingClientRect) within 150px from the viewport and until box bottom is at 150px or more from the viewport
            sec.classList.add('your-active-class');
            uLink.classList.add('active');
        }
        else {
            sec.classList.remove('your-active-class');
            uLink.classList.remove('active');
        }
    }
}

document.addEventListener("scroll", function () {
    makeActiv ();
});


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/


// Hide fixed navigation bar while not scrolling (it should still be present on page load)
let timer = null;
document.addEventListener("scroll", function () {
    const hideNav = document.querySelector('nav');
    if(timer !== null) {
        clearTimeout(timer);
        hideNav.style.display = "block";
    }

    timer = setTimeout(function () {
        hideNav.style.display = "none";
    }, 2500);
});


// Scroll to anchor ID using scrollTO event.
document.querySelector('#navbar__list').addEventListener("click", function (evt) { //apply event to the parent element for a better performance
    if (evt.target.nodeName === 'A') {
        evt.preventDefault();
        const targetId = evt.target.getAttribute("href"); //extract href atribute of the target element
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop,  //offsetTop property gets the y- coordinate
            behavior: "smooth"
    });
}
});


/**
 * End Main Functions
 * Begin Events
 *
*/

// Scroll to section on link click

// Set sections as active


/*Add a scroll to top button on the page that’s only visible when the user scrolls
below the fold of the page -- START */

// Get the button
var mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) { // using document.body.scrollTop > 20 check-up alone is not working, because newer versions of firefox and chrome dont support body.scrollTop or left. Instead use document.documentElement to get the html element
      mybutton.style.display = "block";
  }
  else {
      mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
window.scrollTo({
    top: 0,
    behavior: "smooth"
});
}

/*Add a scroll to top button on the page that’s only visible when the user scrolls
below the fold of the page -- START */


// Make sections collapsible functionality
for (const p of pars) {
    p.classList.add('collapse'); // will use the class to apply display: none, so sections would be shrank upon page loading
}

for (const s of sections) {
    s.classList.add('accordion--shrink'); // will apply styling to remove min-height property, as sections will be shrank upon loading
}

for (const d of divs) {
    d.classList.add('landing__container--shrink'); // will apply style to remove div padding upon page loading
}

document.querySelector('main').addEventListener("click", function (evt) {
    if (evt.target.nodeName === 'H2') {
        evt.target.classList.toggle("section--highlight"); // use toggle to add/ remove class. When added, highlights section heading. When removed, removes highlight
        let panel = evt.target.nextElementSibling; // first p element
        let panelTwo = panel.nextElementSibling; // second p element
        let headingParent = evt.target.parentElement; // div element
        let headingGParent = headingParent.parentElement; // section element
        headingParent.classList.toggle("landing__container--shrink"); // use toggle to add/ remove class. When class removed, padding is applied back
        headingGParent.classList.toggle("accordion--shrink"); // use toggle to add/ remove class. when class removed, min- height is applied back

        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            panel.style.display = "block";
        }

        if (panelTwo.style.display === "block") {
            panelTwo.style.display = "none";
        }
        else {
            panelTwo.style.display = "block";
        }
    }
});