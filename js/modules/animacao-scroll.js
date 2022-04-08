export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='js-scroll']");

    function animaScroll() {
        sections.forEach((section) => {
            const halfSection = window.innerHeight * 0.6;
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = sectionTop - halfSection < 0;
            if(isSectionVisible) {
                section.classList.add('animation')
            }
        })
    }

    window.addEventListener('scroll', animaScroll);
}