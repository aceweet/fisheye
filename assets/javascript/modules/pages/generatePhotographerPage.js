import loadConstants from "../../utils/loadConstants.js";
import { Video } from '../../utils/video.js';

function generatePhotographerPage(photographers) {
    // identify the requested photographer from the query string
    let photographerQuery = new URLSearchParams(window.location.search).get('p');

    let photographerIndex = undefined;
    for (let i = 0; i < photographers.length; i += 1) {
        if (encodeURIComponent(photographers[i].name.replace(/\s|-/g, '')) === photographerQuery) {
            photographerIndex = i;
        }
    }
    if (photographerIndex === undefined) { return; }
    const photographer = photographers[photographerIndex];

    // get all the fields to fill
    const pageTitle = document.getElementById('js-page-title');
    const photographerName = document.getElementById('js-photographer-name');
    const photographerLocation = document.getElementById('js-photographer-location');
    const photographerTagline = document.getElementById('js-photographer-tagline');
    const photographerTags = document.getElementById('js-photographer-tags');
    const photographerPortrait = document.getElementById('js-photographer-portrait');
    const photographerLikes = document.getElementById('js-photographer-likes');
    const photographerPricing = document.getElementById('js-photographer-pricing');
    const contactTitle = document.getElementById('js-contact-title');
    const mainPortfolio = document.querySelector('main.portfolio');

    // generate the photographer's filters
    let photographerFilters = '';
    for (let i = 0; i < photographer.tags.length; i += 1){
        let photographerTag =   `<li>
                                    <span class="screenreader-only">${photographer.tags[i]}</span>
                                    <button name="${photographer.tags[i]}" class="filter__option" aria-hidden="true">#${photographer.tags[i]}</button>
                                </li>`;
            
        photographerFilters += photographerTag;  
    }

    // generate the photographer portfolio media by media
    let photographerPortfolio = '';
    for (let i = 0; i < photographer.media.length; i += 1) {
        
        let mediaElement = `<img src="${photographer.media[i].path}" alt="${photographer.media[i].alt}" class="portfolio__element-media" tabindex="0">`;

        if (photographer.media[i] instanceof Video) {
            mediaElement = `<video src="${photographer.media[i].path}" alt="${photographer.media[i].alt}" class="portfolio__element-media" tabindex="0"></video>
                            <div class="portfolio__element-media--video"></div>`;
        }

        let photographerMedia = `<figure class="portfolio__element">
                                    ${mediaElement}

                                    <figcaption class="portfolio__element-metadata">
                                        <p class="portfolio__element-title" tabindex="0">${photographer.media[i].title}</p>
                                        <p class="portfolio__element-likes" aria-label="likes" tabindex="0">${photographer.media[i].likes}</p>
                                        <p class="portfolio__element-tag screenreader-only" aria-hidden="true">${photographer.media[i].tag}</p>
                                        <p class="portfolio__element-date screenreader-only" aria-hidden="true">${photographer.media[i].date}</p>
                                    </figcaption>
                                </figure>`;

        photographerPortfolio += photographerMedia;
    }

    // fill the page
    pageTitle.innerText = `FishEye — ${photographer.name}`;
    photographerName.innerText = photographer.name;
    photographerLocation.innerText = photographer.location;
    photographerTagline.innerText = photographer.tagline;
    photographerTags.innerHTML = photographerFilters;
    photographerPortrait.innerHTML = `<img src="${photographer.portrait}" alt="${photographer.name}" class="photographer-tile__picture" tabindex="0">`
    photographerLikes.innerText = photographer.likes;
    photographerPricing.innerText = photographer.price;
    contactTitle.innerText = `Contactez-moi\n${photographer.name}`;
    mainPortfolio.insertAdjacentHTML('beforeend', photographerPortfolio);

    // return constants to update the ones that change
    const { ARIA, filters, modalBasics, contactModal, sorter, likesButtons } = loadConstants('all');
    return { ARIA, filters, modalBasics, contactModal, sorter, likesButtons };
}

export default generatePhotographerPage;