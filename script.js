const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! Your message has been received.");
  form.reset();
});