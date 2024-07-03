document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname;

  // Remove any existing active classes
  const navLinks = document.querySelectorAll(".my-nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active-nav-link");
  });

  // Loop through each nav link and add active class to the matching one
  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-nav-link");
    }
  });
});
