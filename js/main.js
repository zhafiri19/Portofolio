// menu show yang di hidden
const navMenu = document.getElementById("main-sidebar"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

// show
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// remove menu
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//scrolled
var sections = document.querySelectorAll("section[id]");

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 && scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll("section .side-item").forEach((el) => {
    el.classList.remove("active");
  });
};

var addActiveClass = function (id) {
  var selector = `section li[id="${id}"]`;
  document.querySelector(selector).classList.add("active");
};

var navLinks = document.querySelectorAll(".side-list a");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    var currentId = e.target.attributes.href.value;
    var section = document.querySelector(currentId);
    var sectionPos = section.offsetTop;
    // section.scrollIntoView({
    //   behavior: "smooth",
    // });

    window.scroll({
      top: sectionPos,
      behavior: "smooth",
    });
  });
});

//Card Hover Glass
VanillaTilt.init(document.querySelector(".about__information"), {
  max: 10,
  speed: 400,
});

//Progress bar
const skillsSection = document.getElementById("progess-skills");
const progressBars = document.querySelectorAll(".skills__bar");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}

function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillsSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 2;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});
