import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector("div.gallery");
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
       
      <div class="gallery__item">
       <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        >
       </a>
      </div>
       
    `;
    })
    .join("");
}

galleryContainer.addEventListener("click", onUrlImgGalleryClick);

function onUrlImgGalleryClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
      <img
          src="${e.target.dataset.source}"
        >
  `);

  instance.show();

  galleryContainer.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  });
}
