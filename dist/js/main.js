document.addEventListener("DOMContentLoaded", function () {
  const mobileNavbar = document.getElementById("mobileNavbar");
  const openNavbarBtn = document.getElementById("openNavbar");
  const closeNavbarBtn = document.getElementById("closeNavbar");
  const overlay = document.getElementById("overlay");

  // Open Navbar
  openNavbarBtn.addEventListener("click", function () {
    mobileNavbar.classList.remove("hidden");
  });

  // Close Navbar
  closeNavbarBtn.addEventListener("click", function () {
    mobileNavbar.classList.add("hidden");
  });

  // Close Navbar when clicking outside (on overlay)
  overlay.addEventListener("click", function () {
    mobileNavbar.classList.add("hidden");
  });
});

