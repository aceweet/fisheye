function filterResultsHomepage(filter, reset) {
    const photographerTiles = document.querySelectorAll('.home-photographer');

    photographerTiles.forEach(tile => {
        // make sure all photographers are displayed
        tile.style.display = 'block';

        // if the filter is reset, stop here
        if (reset === true) { return; }

        // get all the photographer tags
        const tags = tile.querySelectorAll('.filter__option');
        const match = [];

        tags.forEach(tag => {
            // if the photographer tag match with the filter
            if (tag.name === filter) {
                match.push(true);
            }
            // if the photographer tag doesn't match with the filter
            if (tag.name !== filter) {
                match.push(false);
            }
        });

        // if at least one tag match the filter, then the checksum is true
        const checksum = match.reduce((a, b) => a || b);
        // if the checksum is false, then the photographer is masked
        if (checksum === false) {
            tile.style.display = 'none';
        }
    });
}

export default filterResultsHomepage;