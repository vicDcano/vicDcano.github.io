document.addEventListener('click', (e) => {
    const contactLink = e.target.closest(".link"); // Detect the "Contact" link
    const contactBox = document.querySelector(".contact-box"); // Find the contact box
    const closeButton = e.target.closest(".close-button");

    if (contactLink && contactLink.textContent.trim() === "Contact") {
        e.preventDefault(); // Prevent the default anchor behavior

        if (contactBox) {
            // Toggle visibility
            const isHidden = contactBox.classList.contains('hidden');
            contactBox.classList.toggle('hidden', !isHidden); // Remove 'hidden' if present
            contactBox.classList.toggle('active', isHidden); // Add 'active' if it was hidden
        }
    }

    if (closeButton && contactBox) {
        contactBox.classList.add('hidden'); // Hide the contact box
        contactBox.classList.remove('active'); // Remove the active class
    }
});