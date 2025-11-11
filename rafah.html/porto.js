let headerSection = document.getElementById("header");
let title = document.querySelector(".title");
let menu = document.querySelectorAll(".menu ul li a");
let floatingButton = document.getElementById("floating-button");

function scrollHeader() {
  if (window.scrollY > 0) {
    headerSection.style.backgroundColor = "#2c62f7ff";
    headerSection.style.borderBottom = "none";
    title.style.color = "white";
    menu.forEach((element) => {
      element.style.color = "white";
    });
    floatingButton.style.display = "flex";
  } else {
    headerSection.style.backgroundColor = "transparent";
    headerSection.style.borderBottom = "1px solid #e0e0e0";
    title.style.color = "black";
    menu.forEach((element) => {
      element.style.color = "black";
    });
    floatingButton.style.display = "none";
  }
}

window.onscroll = scrollHeader;

let homeLink = document.querySelector('.menu ul li a[href="#home"]');
let aboutLink = document.querySelector('.menu ul li a[href="#about"]');
let homeSection = document.getElementById("home");
let aboutSection = document.getElementById("about");

function scrollToHome(event) {
  event.preventDefault();
  homeSection.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToAbout(event) {
  event.preventDefault();
  aboutSection.scrollIntoView({
    behavior: "smooth",
  });
}
homeLink.addEventListener("click", scrollToHome);
aboutLink.addEventListener("click", scrollToAbout);

floatingButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

let menuBars = document.getElementById("menu-bars");
let sideBarResponsive = document.getElementById("sidebar-responsive");
let closeSidebar = document.getElementById("close-sidebar");

let mediaScreen = window.matchMedia("(max-width: 768px)");

function handleScreenChange(e) {
  if (e.matches) {
    menuBars.style.display = "block";
    menuBars.addEventListener("click", function () {
      sideBarResponsive.style.display = "block";
      menuBars.style.display = "none";
    });
    closeSidebar.addEventListener("click", function () {
      sideBarResponsive.style.display = "none";
      menuBars.style.display = "block";
    });
  } else {
    sideBarResponsive.style.display = "none";
    menuBars.style.display = "none";
  }
}

mediaScreen.addEventListener("change", handleScreenChange);
handleScreenChange(mediaScreen);