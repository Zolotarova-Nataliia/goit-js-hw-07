import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);
function createGalleryItemsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

galleryContainer.addEventListener("click", onGalleryContainerClick);
let modal;
function onGalleryContainerClick(event) {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    modal = basicLightbox.create(
      `
            <img
              width="1200"
              height="900"
              src="${event.target.dataset.source}" 
              alt="${event.target.alt}">
        `,
      {
        onShow: () => {
          document.addEventListener("keydown", modalClose);
        },
        onClose: () => {
          document.removeEventListener("keydown", modalClose);
        },
      }
    );
    modal.show();
  }
  console.log(event.target);
}
function modalClose(event) {
  if (event.key === "Escape") {
    modal.close();
  }
}
