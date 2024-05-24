import { galleryItems } from './gallery-items';
import { createMarkup } from '../helpers/createMarkup';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

createMarkup(galleryItems);

gallery.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

export { gallery };
