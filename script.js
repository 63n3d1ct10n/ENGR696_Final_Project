window.onload = main

// Represents available pages
const pages = {
    ABOUT: "About",
    SKILLS: "Skills",
    PROJECTS: "Projects"
}

// Represent current page
let currentPage = pages.ABOUT;

function main(){
    initNavBar();
}

/**
 * Add event listeners to navbar buttons
 */
function initNavBar(){
    const aboutButton = document.getElementById("about-button");
    const skillsButton = document.getElementById("skills-button");
    const projectsButton = document.getElementById("projects-button");

    aboutButton.addEventListener("click", () => togglePage(pages.ABOUT));
    skillsButton.addEventListener("click", () => togglePage(pages.SKILLS));
    projectsButton.addEventListener("click", () => togglePage(pages.PROJECTS));
}

/**
 * Renders a page, given one of the available pages 
 * @param {*} page 
 */
function togglePage(page){
    if(page === currentPage) return

    switch (page) {
        case pages.ABOUT:
            renderAboutPage();
            break;

        case pages.SKILLS:
            renderSkillsPage();
            break;
        
        case pages.PROJECTS:
            renderProjectsPage();
            break;
    
        default:
            console.error(page + " not recognized!");
            break;
    }
}

/**
 * Renders about page
 */
function  renderAboutPage(){
    currentPage = pages.ABOUT;
    hidePage("skills-page");
    hidePage("projects-page");
    deemphasizeNavItem("skills-button");
    deemphasizeNavItem("projects-button");

    showPage("about-page");
    emphasizeNavItem("about-button");
}

/**
 * Renders skills page
 */
function renderSkillsPage(){
    currentPage = pages.SKILLS;
    hidePage("about-page");
    hidePage("projects-page");
    deemphasizeNavItem("about-button");
    deemphasizeNavItem("projects-button");

    showPage("skills-page");
    emphasizeNavItem("skills-button");
}

/**
 * Render projects page
 */
function renderProjectsPage(){
    currentPage = pages.PROJECTS;
    hidePage("about-page");
    hidePage("skills-page");
    deemphasizeNavItem("about-button");
    deemphasizeNavItem("skills-button");

    showPage("projects-page");
    emphasizeNavItem("projects-button");
}

/*----------- Helper Functions To Hide and Show pages ------------ */
/**
 * Takes an HTML element and hides it 
 * given an id
 * @param {*} pageId 
 */
function hidePage(pageId){
    document.getElementById(pageId).style.display = "none";
}

/**
 * Takes an HTML element and sets its display
 * style to block.
 * @param {*} pageId 
 */
function showPage(pageId){
    document.getElementById(pageId).style.display = "block";
}

/*---------- Helper functions to emphasize and deemphasize nav items -----*/
/**
 * Colors an HTML element given its ID
 * @param {*} itemId 
 */
function emphasizeNavItem(itemId){
    const emphasisColor = "#E98769";
    document.getElementById(itemId).style.color = emphasisColor;
    document.getElementById(itemId).style.borderBottom = "solid 1px #E98769";
}

/**
 * Changes text color of an HTML element to white
 * given its ID
 * @param {*} itemId 
 */
function deemphasizeNavItem(itemId){
    document.getElementById(itemId).style.color = "#FFF";
    document.getElementById(itemId).style.borderBottom = "solid 1px #142444";
    
}

/** */
