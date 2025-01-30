const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const topbar = document.getElementById("topbar");

function applyTheme(theme) {
    if (theme === "light") {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        topbar.classList.remove("topbar-dark");
        topbar.classList.add("topbar-light");
        localStorage.setItem("theme", "light");
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        topbar.classList.remove("topbar-light");
        topbar.classList.add("topbar-dark");
        localStorage.setItem("theme", "dark");
    }
}

applyTheme(localStorage.getItem("theme") || "dark");

themeToggle.addEventListener("click", () => {
    const newTheme = body.classList.contains("dark-mode") ? "light" : "dark";
    applyTheme(newTheme);
});

document.querySelector('.ph-gear').addEventListener('click', function () {
    document.querySelector('.relative .hidden').classList.toggle('hidden');
});

