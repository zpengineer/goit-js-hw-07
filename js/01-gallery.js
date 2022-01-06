import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const galleryItemsMarkup = creatGalleryItemsMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryItemsMarkup);


function creatGalleryItemsMarkup(items) {

    return items.map(({original, preview, description}) => 
        `<div class="gallery__item">
            <a class="gallery__link" href='${original}'>
                <img
                class="gallery__image"
                src='${preview}'
                data-source='${original}'
                alt='${description}'
                />
            </a>
        </div>`
    ).join("");
    
}

galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    const modalMarkup = `<img src="${e.target.dataset.source}" alt="${e.target.alt}">`;
    const instance = basicLightbox.create(modalMarkup);

    instance.show();


    window.addEventListener('keydown', e => {
         if (e.key === 'Escape') {
            instance.close();
        }
    });



    window.addEventListener('keydown', onKeyPressArrowLeft);
    window.addEventListener('keydown', onKeyPressArrowRight);
    
}


// Дополнительный функционал, перелистывание галлереи с помощью "Стрелки вправо" и "Стрелки влево"

function onKeyPressArrowLeft(e) {  

    const lightBoxRef = document.querySelector('.basicLightbox img');

    if (e.key === 'ArrowLeft') {

        const originalImgArray = galleryItems.map(({ original }) => original);

        let indexCurrentImg = originalImgArray
            .findIndex(img => img === lightBoxRef.src)
        
       lightBoxRef.src = originalImgArray[indexCurrentImg === 0 ? originalImgArray.length - 1 : indexCurrentImg - 1];
       
    }
}

function onKeyPressArrowRight(e) {  

    const lightBoxRef = document.querySelector('.basicLightbox img');

    if (e.key === 'ArrowRight') {

        const originalImgArray = galleryItems.map(({ original }) => original);

        let indexCurrentImg = originalImgArray
            .findIndex(img => img === lightBoxRef.src);

        lightBoxRef.src = originalImgArray[indexCurrentImg === originalImgArray.length - 1 ? 0 : indexCurrentImg + 1];
    }
}