// Add imports above this line
import SimpleLightbox from 'simplelightbox';
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galaryContainer = document.querySelector('.gallery');

const galaryMarkup = createGalaryMarkup(galleryItems);

galaryContainer.insertAdjacentHTML('beforeend', galaryMarkup);
// galaryContainer.addEventListener("click", ongalaryContainerClick);

function createGalaryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
            <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
            `;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
