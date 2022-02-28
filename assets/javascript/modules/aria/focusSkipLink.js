// when the user lands on filter going back up the document
// move the focus on the skip link
function focusSkipLink(filter, event) {
    event.preventDefault();
    
    const skipLink = filter.closest('nav.filter').querySelector('a.skip-link');
    skipLink.focus();
}

export default focusSkipLink;