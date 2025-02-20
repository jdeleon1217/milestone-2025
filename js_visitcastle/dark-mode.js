
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    
    // Button text
    const button = document.querySelector("button[onclick='toggleDarkMode()']");
    button.textContent = isDarkMode ? "🌙" : "☀️";  // Moon icon for Dark mode, Sun icon for light mode

    // Save preference to localStorage
    localStorage.setItem("darkMode", isDarkMode);
}

// Dark Mode user preferences
document.addEventListener("DOMContentLoaded", () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
        const button = document.querySelector("button[onclick='toggleDarkMode()']");
        button.textContent = "☀️";
    }
});

