import { gallery } from '../01-gallery';

function createMarkup(arr) {
  return arr
    .map(
      ({ original, preview, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
     
      />
    </a>
  </li>`
    )
    .join('');
}

export { createMarkup };
