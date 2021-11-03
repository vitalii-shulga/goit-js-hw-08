// Add imports above this line
import { galleryItems } from './gallery-items'
// Change code below this line
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'

const galleryContainer = document.querySelector('.gallery')
const cardsMarkup = createGalleryCardsMarkup(galleryItems)

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}" />
        </a>
      </div>
    `
    })
    .join('')
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
})
