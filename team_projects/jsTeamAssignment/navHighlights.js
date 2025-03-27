document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navLinks");
    

    function highlightNav() {

        let mostVisible = null;
        let maxVisibleArea = 0;
            

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

            if (visibleHeight > maxVisibleArea) {
                maxVisibleArea = visibleHeight;
                mostVisible = section; 
                
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[index].classList.add("active");
            }
            if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
                navLinks.forEach(link => link.classList.remove("active"));
                navLinks[3].classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
    window.addEventListener("DOMContentLoaded", highlightNav)
});
