# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.
# Landing-Page

## Functionalities and Behavior:

* ### **Navigation:**
  Built dynamically as an unordered list. `<Fragment>` element used for performance

* ### **Section Active State:**
  Active state added when section near top of viewport `<getBoundingClientRect>` method used to extract coordinates.

* ### **Scroll to Anchor:**
  When clicking an item from the navigation menu, the link should scroll to the appropriate section. `<ScrollTo>` event used to implement functionality.

* ### **Hide fixed navigation bar:**
  Hide fixed navigation bar while not scrolling (it should still be present on page load): `<setTimeout()>` and `<clearTimeout>` methods used.

* ### **Scroll to top button:**
  Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page:** `<var mybutton = document.getElementById("myBtn");>` added to the HTML markup. `<onscroll>` and `<scrollTop>` properties used to implement functionality.

* ### **Make sections collapsible:**
  `<evt.target>` property and `<toggle>` method used

* ### **Update/change the design/content:**
  Two sections added. Title attribute added to all sections. Button tag and icon tag added to implement the *scroll to top functionality*. Classes added to style collapsable sections, button and icon tags. Class added to style `<li>` and `<section>` elements when in active state


## Project Evaluation Request:
* I would like a very thorough evaluation of my project
* Please let me know what I could have done better to optimize the performance of my landing page
* Do you see any issues with any of my functionalities?
* Do you have any recommendations for me on how to improve my javascript skills?
* Do you have any remarks about my project?

## My Other Projects:
If you liked my landing page, here is a link to my first [Udacity project] (https://github.com/klalchev/Louisiana-Adventures) on GitHub. Thank you for evaluating my project!