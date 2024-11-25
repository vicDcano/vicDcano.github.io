document.addEventListener('click', e => 
{
    const dropdownButton = e.target.closest("[data-dropdown-button]");
    const dropdown = e.target.closest("[data-dropdown]")

    if(dropdownButton)
    {
        dropdown.classList.toggle('active');

        const arrow = dropdown.querySelector(".arrow ul");

        if(arrow)
        {
            arrow.classList.toggle('flipped');
        }
    }

    else if(!dropdown)
    {
        document.querySelectorAll("[data-dropdown].active").forEach((openDropdown) => 
        {
            openDropdown.classList.remove('active');

            const otherArrow = openDropdown.querySelector(".arrow ul");

            if(otherArrow)
            {
                otherArrow.classList.remove('flipped');
            }
        });
    }
});