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

document.addEventListener("DOMContentLoaded", function () {
    function updateDateTime() {
        const datetimeEl = document.getElementById('datetime');
        if (!datetimeEl) return; // Prevents errors if the element is missing

        const now = new Date();
        const options = {  
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
        };

        datetimeEl.textContent = now.toLocaleString('en-US', options);
    }

    // Run immediately & update every second
    updateDateTime();
    setInterval(updateDateTime, 1000);
});