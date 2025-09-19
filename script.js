let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const themeToggle = document.getElementById("theme-icon");
const body = document.body;

// DARK MODE
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeToggle.classList.replace("bx-moon", "bx-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.classList.replace("bx-moon", "bx-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.classList.replace("bx-sun", "bx-moon");
    localStorage.setItem("theme", "light");
  }
});
