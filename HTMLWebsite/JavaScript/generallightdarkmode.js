document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkmode-toggle");
    const animatedBox = document.querySelector(".animated-box");

    // Function to set theme dynamically
    const setMode = (isDarkMode) => {
        if (isDarkMode) {
            document.documentElement.style.setProperty("--bg-color", "#242424"); // Dark background
            document.documentElement.style.setProperty("--text-color", "#f0f0f0"); // Dark text
        } else {
            document.documentElement.style.setProperty("--bg-color", "#fff"); // Light background
            document.documentElement.style.setProperty("--text-color", "#000"); // Light text
        }

        // Reset and replay animation
        animatedBox.style.animation = "none"; // Remove animation
        void animatedBox.offsetWidth; // Trigger reflow
        animatedBox.style.animation = "slide-in 2s ease-out forwards"; // Reapply animation
    };

    // Check localStorage for user preference
    const isDarkMode = JSON.parse(localStorage.getItem("darkmode")) || false;
    toggle.checked = isDarkMode;
    setMode(isDarkMode);

    // Add toggle functionality
    toggle.addEventListener("change", () => {
        const isChecked = toggle.checked;
        setMode(isChecked);
        localStorage.setItem("darkmode", isChecked); // Persist preference
    });
});
