// Navbar
document.addEventListener("DOMContentLoaded", () => {
  const links = {
    "index.html": "home-link",
    "about.html": "about-link",
    "contact.html": "contact-link",
    "faqs.html": "faqs-link",
  };

  const currentPath = window.location.pathname.split("/").pop();
  const activeLinkId = links[currentPath];

  if (activeLinkId) {
    document.getElementById(activeLinkId).classList.add("active");
  }
});
// Navbar

document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");

  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const icon = this.querySelector(".accordion-icon");
      if (this.classList.contains("collapsed")) {
        icon.textContent = "+";
      } else {
        icon.textContent = "-";
      }
    });
  });
});
