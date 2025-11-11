let header = document.getElementById("header");
let title = document.querySelector(".title");
let menu = document.querySelectorAll(".menu ul li a");
let floatingButton = document.getElementById("floating-button");
function bg() {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "#84d8aa";
    header.style.borderBottom = "5px solid #ffffffff";
    title.style.color = "white";
    menu.forEach(function (item) {
    item.style.color = "white";
    });
  } else {
    header.style.backgroundColor = "transparent";
    header.style.borderBottom = "1px solid #ffffffff";
    title.style.color = "black";
    menu.forEach(function (item) {
      item.style.color = "black";
    });
  }
}
window.addEventListener("scroll", bg);
 
function floatingBttn() {
  if (window.scrollY > 0) {
    floatingButton.style.display = "flex";
  } else {
    floatingButton.style.display = "none";
  }
}
window.addEventListener("scroll", floatingBttn);

function floatingTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
floatingButton.onclick = floatingTop;

let homenu= document.querySelector('.menu ul li a[href="#home"]');
let aboutmenu = document.querySelector('.menu ul li a[href="#about"]');
let skillmenu = document.querySelector('.menu ul li a[href="#skill"]');
let worksmenu = document.querySelector('.menu ul li a[href="#works"]');
let contactmenu = document.querySelector('.menu ul li a[href="#contact"]');
let homesection = document.getElementById("home");
let aboutsection = document.getElementById("about");
let skillsection = document.getElementById("skill");
let workssection = document.getElementById("works");
let contactsection = document.getElementById("contact");

function homeScroll(event) {
  event.preventDefault();
  homesection.scrollIntoView({ behavior: "smooth" });
}
function aboutScroll(event) {
  event.preventDefault();
  aboutsection.scrollIntoView({ behavior: "smooth" });
}
function skillScroll(event) {
  event.preventDefault();
  skillsection.scrollIntoView({ behavior: "smooth" });
}
function worksScroll(event) {
  event.preventDefault();
  workssection.scrollIntoView({ behavior: "smooth" });
}
function contactScroll(event) {
  event.preventDefault();
  contactsection.scrollIntoView({ behavior: "smooth" });
}

homenu.onclick = homeScroll;
aboutmenu.onclick = aboutScroll;
skillmenu.onclick = skillScroll;
worksmenu.onclick = worksScroll;
contactmenu.onclick = contactScroll;

let menubars= document.getElementById("menu-bars");
let sidebarresponsive = document.querySelector(".sidebar-responsive");
let close = document.getElementById("close");
let responsiveScreen = window.matchMedia("(max-width: 768px)");

function responsive(screen) {
  if (screen.matches) {
    menubars.style.display = "block";
    menubars.addEventListener("click", function () {
    sidebarresponsive.style.display = "flex";
    menubars.style.display = "none";
    });
  close.addEventListener("click", function () {
    sidebarresponsive.style.display = "none";
    menubars.style.display = "block";});
    
  }else {
    menubars.style.display = "none";
    sidebarresponsive.style.display = "none";
  }
}
  responsiveScreen.addEventListener("change", function() {
  responsive(responsiveScreen);
});
// function sidebar() {
// sidebarresponsive.style.display = "flex";
// menubars.style.display = "none";
// }
// function closeSidebar() {
// sidebarresponsive.style.display = "none";
// menubars.style.display = "block";
// }
// menubars.onclick = sidebar;
// close.onclick = closeSidebar;


