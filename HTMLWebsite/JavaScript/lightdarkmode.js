document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkmode-toggle");
    const boxOne = document.querySelector(".mini-box-one");
    const boxTwo = document.querySelector(".mini-box-two");
    const gradientText = document.querySelector(".gradient-text");
    const bioText = document.querySelector(".bio");
    const dropdownmenu = document.querySelector(".dropdown-menu ");
    const formText = document.querySelector(".form-text");
    const formTitle = document.querySelector(".form-title");
    const formButtonText = document.querySelector(".form-button");

    // Function to set the mode
    function setMode(isDarkMode) 
    {
        if (isDarkMode) 
        {
            document.body.style.backgroundColor = "#242424"; // Background color for dark mode 
            boxOne.style.backgroundColor = "rgb(80, 253, 123)"; // Adjust boxOne background
            boxOne.style["boxShadow"] = "0 4px 8px 0 rgba(247, 247, 247, 0.2), 0 6px 20px 0 rgba(247, 247, 247, 0.19)"; // Adjusting Boxshadow
            boxTwo.style.backgroundColor = "#444"; // Adjust boxTwo background
            boxTwo.style["boxShadow"] = "0 4px 8px 0 rgba(247, 247, 247, 0.2), 0 6px 20px 0 rgba(247, 247, 247, 0.19)";
            gradientText.style.color = "#f0f0f0"; // Text color for dark mode
            bioText.style.color = "#ccc"; // Bio text color for dark mode
            dropdownmenu.style["boxShadow"] = "0 10px 24px 0 rgba(247, 247, 247, 0.2), 0 12px 25px 0 rgba(247, 247, 247, 0.19)";
            formText.style.color = "#444";
            formTitle.style.color = "#444";
            formButtonText.style.color = "#444";
        } 

        else 
        {
            document.body.style.backgroundColor = "#fff"; // Background color for light mode
            boxOne.style.backgroundColor = "rgb(80, 253, 123)"; // Default boxOne background
            boxOne.style["boxShadow"] = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            boxTwo.style.backgroundColor = "aliceblue"; // Default boxTwo background
            boxTwo.style["boxShadow"] = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            gradientText.style.color = "black"; // Text color for light mode
            bioText.style.color = "#000"; // Bio text color for light mode
            dropdownmenu.style["boxShadow"] = "5px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            formText.style.color = "#000";
            formTitle.style.color = "#000";
            formButtonText.style.color = "#000";
        }
    }

    // Load user preference from localStorage
    const isDarkMode = JSON.parse(localStorage.getItem("darkmode")) || false;
    toggle.checked = isDarkMode;
    setMode(isDarkMode);

    // Add event listener to toggle
    toggle.addEventListener("change", () => {
        const isChecked = toggle.checked;
        setMode(isChecked);
        localStorage.setItem("darkmode", isChecked); // Save preference to localStorage
    });
});
