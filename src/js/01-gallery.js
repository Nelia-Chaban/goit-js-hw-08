import { galleryItems } from './gallery-items';
import { createMarkup } from '../js/helpers/createMarkup';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');
const markUp = createMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', markUp);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export { gallery };
