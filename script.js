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

  /* **************** section highlight **************** */
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

  /* **************** sticky navbar **************** */
  header.classList.toggle("sticky", top > 100);
});

/* ************ remove toggle icon & navbar when clicking navbar link (scroll) ************ */
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
  });
});

/* **************** Contact Form Submission Alert **************** */
// Form submission with JavaScript
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const submitButton = this.querySelector('button[type="submit"]');

  const originalText = submitButton.textContent;

  try {
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      alert("Message sent successfully!");
      this.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  } catch (error) {
    alert("An error occurred. Please try again.");
  } finally {
    submitButton.textContent = originalText;
    submitButton.disabled = false;
  }
});
