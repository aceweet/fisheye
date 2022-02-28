function filterResultsPhotographerPage(filter, reset) {
    const portfolioTiles = document.querySelectorAll('.portfolio__element');

    portfolioTiles.forEach(tile => {
        // make sure all the media tiles are displayed
        tile.style.display = 'block';

        // if the filter is reset, stop here
        if (reset === true) { return; }

        const tag = tile.querySelector('.portfolio__element-tag');

        // if the media tag doesn't match with the filter, mask it
        if(tag.textContent !== filter) {
            tile.style.display = 'none';
        }
    });
}

export default filterResultsPhotographerPage;