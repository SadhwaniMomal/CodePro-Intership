// Navbar active code
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Function to handle click on nav links
  function handleNavClick(event) {
    event.preventDefault();
    const clickedLink = this;

    // Remove 'active' class from all links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    clickedLink.classList.add("active");

    // Optional: Scroll to the section corresponding to the clicked link
    const targetId = clickedLink.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Attach click event listeners to nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });
});
