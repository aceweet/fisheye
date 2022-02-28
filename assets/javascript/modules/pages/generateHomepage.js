import loadConstants from "../../utils/loadConstants.js";

function generateHomepage(photographers) {
    let injectHTML = '';

    // generate the homepage photographer by photographer
    for (let i = 0; i < photographers.length; i += 1) {
        let photographerFilters = '';

        // generate the main part of the photographer tile
        let photographerMain = `<a href="photographer/index.html?p=${encodeURIComponent(photographers[i].name.replace(/\s|-/g, ''))}" aria-label="${photographers[i].name}">
                                    <figure>
                                        <img src="${photographers[i].portrait}" alt="${photographers[i].name}" class="home-photographer__picture">
            
                                        <figcaption>
                                            <h2 class="home-photographer__name">${photographers[i].name}</h2>
                                        </figcaption>
                                    </figure>
                                </a>

                                <div tabindex="0">
                                    <p class="home-photographer__location">${photographers[i].location}</p>
                                    <p class="home-photographer__description">${photographers[i].tagline}</p>
                                    <p class="home-photographer__pricing">${photographers[i].price}</p>
                                </div>`;

        // generate the photographer's filters
        for (let j = 0; j < photographers[i].tags.length; j += 1) {
            let photographerTag =   `<li>
                                        <span class="screenreader-only">${photographers[i].tags[j]}</span>
                                        <button name="${photographers[i].tags[j]}" class="filter__option" aria-hidden="true">#${photographers[i].tags[j]}</button>
                                    </li>`;
            
            photographerFilters += photographerTag;                        
        }

        // generate the photographer's tile footer
        let photographerFooter =    `<footer>
                                        <nav class="filter">
                                            <a href="#photographer-${i+1}" class="skip-link">Passer ce menu</a>

                                            <ul class="filter__list">
                                                ${photographerFilters}
                                            </ul>
                                        </nav>
                                    </footer>`;

        // put everything together
        let photographerFull =  `<article id="photographer-${i}" class="home-photographer">
                                    ${photographerMain}
                                    
                                    ${photographerFooter}
                                </article>`;

        injectHTML += photographerFull;
    }

    // add the photographers tiles to the page
    const main = document.getElementById('main');
    main.insertAdjacentHTML('beforeend', injectHTML);

    // return constants to update the ones that change
    const { ARIA, filters } = loadConstants('shared');
    return { ARIA, filters };
}

export default generateHomepage;