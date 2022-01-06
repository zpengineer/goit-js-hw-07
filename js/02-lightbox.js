import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainerRef = document.querySelector('.gallery');

function creatGalleryItemsMarkup(items) {
    return items.map(({preview, original, description}) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
    ).join("");
}

const galleryItemsMarkup = creatGalleryItemsMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", galleryItemsMarkup);

let lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
