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
