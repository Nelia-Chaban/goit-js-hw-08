import { gallery } from '../js/01-gallery';

function createMarkup(arr) {
  const markup = arr
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

  gallery.insertAdjacentHTML('beforeend', markup);
}

export { createMarkup };
