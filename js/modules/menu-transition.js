export default function initMenuTransition() {
    
    function transitionMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle("fixed", window.scrollY > 0)
    }
    window.addEventListener('scroll', transitionMenu)
}