/* ***************** toggle icon navbar ***************** */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* **************** scroll sections active link + sticky navbar + scroll-top btn ***************** */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let header = document.querySelector("header");
let scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  let top = window.scrollY;

  // section highlight
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`header nav a[href="#${id}"]`)
        ?.classList.add("active");
    }
  });

  // sticky navbar
  header.classList.toggle("sticky", top > 100);

  // scroll-to-top button
  scrollTopBtn.classList.toggle("active", top > 300);
});

/* ************ remove toggle icon & navbar when clicking navbar link (scroll) ************ */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});
