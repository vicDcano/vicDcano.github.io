document.addEventListener("DOMContentLoaded", () => {
    const pointer = document.querySelector(".pointyFinger");
    const links = document.querySelectorAll(".dropdown-links .link");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            const linkRect = link.getBoundingClientRect();
            const menuRect = dropdownMenu.getBoundingClientRect();

            // Calculate the left and top positions
            const pointerLeft = linkRect.left - menuRect.left - pointer.offsetWidth - 5; // Offset by pointer width + small gap
            const pointerTop = linkRect.top - menuRect.top + (linkRect.height - pointer.offsetHeight) / 2;

            // Set pointer position
            pointer.style.left = `${pointerLeft}px`;
            pointer.style.top = `${pointerTop}px`;

            // Show the pointer
            pointer.style.opacity = "1";
            pointer.classList.add("bounce");
        });

        link.addEventListener("mouseleave", () => {
            // Hide the pointer
            pointer.style.opacity = "0";
            pointer.classList.remove("bounce");
        });
    });
});
