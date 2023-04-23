import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallary = document.querySelector('.gallery')
const imageCollection = imgCollectionCreate(galleryItems)

gallary.insertAdjacentHTML("beforeend", imageCollection)
gallary.addEventListener("click", eventImgTarget)

function imgCollectionCreate(img) {
    return img
    .map(({preview, original, description}) =>{
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`
})
.join('')}

function eventImgTarget(e){
    e.preventDefault();

if (!e.target.classList.contains('gallery__image')){return}
const gallery = new SimpleLightbox('.gallery a',{
    captionsData: 'alt',
    captionsDelay: 250,
});
}