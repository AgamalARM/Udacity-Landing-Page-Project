# Landing Page Project

## Author     : Ahmed Gamal 
                                               
## Description: Dynamic Landing Page by Manipulating the DOM using JS
                 
## Date       : 10 May 2021 

## Requirements:

1. Navigation is built dynamically as an unordered list.
2. It should be clear which section is being viewed while scrolling through the page. (section should recieve an active class)
3. When clicking an item from the navigation menu, the link should scroll to the appropriate section (smooth scrolling).
4. While scrolling navigation item corresponding to the section in viewport is highlited.

## Functions, APIS, and Methods Used:

1. Element.addEventListener()
2. Element.scrollIntoView()
3. Element.getBoundingClientRect()
3. Toggling CSS classes for user view Section by active class and for Anchor link 
4. My Building functions [dynamicBuildMyNavBar(), userViewSection(arg) and setActiveSection()]

     First Function dynamicBuildMyNavBar() :
          To build dynamic nav bar according to number of sections in page (initial 5 sections created)
     Second Function userViewSection(arg)  :
          To check dimensions of viewed section
     Third Function setActiveSection()     :
          To toggle active class for viewport section
