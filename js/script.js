document.addEventListener("DOMContentLoaded", function () {
  const primaryHeader = document.getElementById("primary-header");

  if (primaryHeader) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        primaryHeader.classList.add("fixed-top");
      } else {
        primaryHeader.classList.remove("fixed-top");
        document.body.style.paddingTop = "0";
      }
    });
  }
});