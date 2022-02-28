function anchor() {
    const anchor = document.getElementById('skip-to-main');

    // once scrolled further than 100px, display a back to main link
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            anchor.classList.add('visible');
        }
        if (window.scrollY < 100) {
            anchor.classList.remove('visible');
        }
    });
}

export default anchor;