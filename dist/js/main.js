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

const notificationButton = document.getElementById("notificationButton");
const notificationDropdown = document.getElementById("notificationDropdown");

notificationButton.addEventListener("click", () => {
  notificationDropdown.classList.toggle("hidden");
});

// Close when clicking outside
document.addEventListener("click", (event) => {
  if (
    !notificationButton.contains(event.target) &&
    !notificationDropdown.contains(event.target)
  ) {
    notificationDropdown.classList.add("hidden");
  }
});
