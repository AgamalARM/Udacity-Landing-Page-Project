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
/******************************************************************************/
/*   Author     : Ahmed Gamal                                                 */
/*   Description: Javascript Code for Landing Page Project                    */
/*   Version    : v 1.0                                                       */
/*   Date       : 10 May 2021                                                 */
/******************************************************************************/

/**
 * Define Global Variables
 *
*/
const mySec = document.querySelectorAll("section");   //Select according to Tag name
const myUl = document.querySelector("#navbar__list"); //Select according to Id  name
const myFragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/*********** Function of Dynamic Creation of Navbar Unorderd List ***********/
function dynamicBuildMyNavBar() {
    mySec.forEach((item) => {
        const mySecName = item.getAttribute("data-nav");
        const newLi = document.createElement("li");
        const newAnchor = document.createElement("a");
        newAnchor.className = "menu__link";       //add style to Anchor as the same class in CSS
        const newText = document.createTextNode(mySecName);

        newAnchor.addEventListener('click', () => {
            item.scrollIntoView({ behavior: "smooth" });

        })

        newAnchor.appendChild(newText);
        newLi.appendChild(newAnchor);
        myFragment.appendChild(newLi);

    });

    myUl.appendChild(myFragment);
}
/*********************************************************************************/
/*************** Function of User View Section ***********************************/
function userViewSection(sec) {
    let secDimensions = sec.getBoundingClientRect();
    return (secDimensions.top >= -100 && secDimensions.top <= 250);
}
/*********************************************************************************/
/*************Function of Set Active Class for viewed section ********************/

function setActiveSection() {
    const getLinks = document.querySelectorAll("a");
    mySec.forEach((element) => {
        if (userViewSection(element)) {            //Check if section in user view
            if (!element.classList.contains('your-active-class')) {
                element.classList.add("your-active-class");
            }

            getLinks.forEach((aLink) => {
                if (element.getAttribute("data-nav") == aLink.textContent) {


                    aLink.style.background = "black";
                    aLink.style.color = "orange";


                } else {
                    aLink.style.background = "white";
                    aLink.style.color = "black";
                    aLink.style.cssText = ':hover{}';


                }
            })
        } else {                                    //if section is NOT in user view
            element.classList.remove("your-active-class"); // remove active class

        }


    })

}
/*********************************************************************************/

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

dynamicBuildMyNavBar();

window.addEventListener('scroll', () => {
    setActiveSection();
})
