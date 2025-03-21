document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navLinks");

    function highlightNav() {
        let scrollY = window.scrollY;

        sections.forEach((section, index) => {
            let sectionTop = section.offsetTop; 
            let sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
});
