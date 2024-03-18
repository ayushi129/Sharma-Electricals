// // JavaScript to highlight active section in navbar
// window.addEventListener("scroll", function () {
//   const sections = document.querySelectorAll(".section");
//   const navItems = document.querySelectorAll("#navBar li a");
//   let currentSection = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     const scrollPosition = window.pageYOffset;
//     if (
//       scrollPosition >= sectionTop - sectionHeight / 2 &&
//       scrollPosition < sectionTop + sectionHeight / 2
//     ) {
//       currentSection = section.getAttribute("id");
//     }
//   });

//   navItems.forEach((item) => {
//     item.parentElement.classList.remove("active");
//     if (item.getAttribute("href").slice(1) === currentSection) {
//       item.parentElement.classList.add("active");
//     }
//   });
// });

// Function to highlight the active navigation item
function highlightActiveNavItem(currentSection) {
  const navItems = document.querySelectorAll("#navBar li a");
  navItems.forEach((item) => {
    item.parentElement.classList.remove("active");
    if (item.getAttribute("href").slice(1) === currentSection) {
      item.parentElement.classList.add("active");
    }
  });
}

// Scroll event listener
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".section");
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const scrollPosition = window.pageYOffset;
    if (
      scrollPosition >= sectionTop - sectionHeight / 2 &&
      scrollPosition < sectionTop + sectionHeight / 2
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  highlightActiveNavItem(currentSection);
});

// Click event listener for navigation links
const navLinks = document.querySelectorAll("#navBar li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.querySelector(link.getAttribute("href"));
    const currentSection = targetSection.getAttribute("id");
    highlightActiveNavItem(currentSection);

    // Scroll to the clicked section smoothly
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});








// JavaScript to open and close product description
document.querySelectorAll(".product").forEach((item) => {
  item.addEventListener("click", (event) => {
    let pd = event.currentTarget.querySelector(".pd");
    pd.style.display = pd.style.display === "none" ? "block" : "none";
  });
});







// JavaScript to open and close navbar
const bar = document.getElementById("bar");
const nav = document.getElementById("navBar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
