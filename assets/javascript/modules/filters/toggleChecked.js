function toggleChecked (filter, filters) {
    let reset = undefined;

    // for each filter
    filters.forEach(f => {
        // if the button match the checked filter
        if (f.name === filter) {
            // if the button was already checked, meaning the filter was already applied 
            // remove the class hightlighting it and reset the filter
            if(f.classList.contains('checked')) {
                f.classList.remove('checked');
                return reset = true;
            }
            // add a class to hightlight it
            f.classList.add('checked');
        }
        // if the button doesn't match the checked filter
        if (f.name !== filter) {
            // remove the class that potentially hightlight it
            f.classList.remove('checked');
        }
    });
    
    return reset;
}

export default toggleChecked;