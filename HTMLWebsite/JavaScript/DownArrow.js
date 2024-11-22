document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");

    if (!isDropdownButton && e.target.closest('[data-dropdown]') == null) {
        return;
    }

    let currentDropdown;

    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
        
        // Toggle the arrow flip
        const arrowIcon = currentDropdown.querySelector(".arrow ul");
        arrowIcon.classList.toggle('flipped');
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
        
        // Reset the arrow flip on other dropdowns
        const otherArrowIcon = dropdown.querySelector(".arrow ul");
        otherArrowIcon.classList.remove('flipped');
    });
});