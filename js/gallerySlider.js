let instance = null;

Fancybox.bind("[data-fancybox]", {
  Carousel: { Navigation: false },
  on: {
    reveal: (fancyboxInstance) => {
      instance = fancyboxInstance;

      requestAnimationFrame(() => {
        if (!document.querySelector(".customGalleryNav")) {
          const leftArrow = document.createElement("img");
          const divLeftArrow = document.createElement("div");
          divLeftArrow.className = "divLeftArrow";
          leftArrow.src = "../images/ArrowLeft-Blue.svg";
          leftArrow.className = "customGalleryNav leftGallery";
          divLeftArrow.addEventListener("click", (e) => {
            e.stopPropagation();
            instance.prev();
          });
          divLeftArrow.appendChild(leftArrow);

          const rightArrow = document.createElement("img");
          const divRightArrow = document.createElement("div");
          divRightArrow.className = "divRightArrow";
          rightArrow.src = "../images/ArrowRight-Blue.svg";
          rightArrow.className = "customGalleryNav rightGallery";
          divRightArrow.addEventListener("click", (e) => {
            e.stopPropagation();
            instance.next();
          });
          divRightArrow.appendChild(rightArrow);

          const container = document.querySelector(".fancybox__container");

          if (container) {
            container.appendChild(divLeftArrow);
            container.appendChild(divRightArrow);
          }
        }
      });
    },
    destroy: () => {
      document
        .querySelectorAll(".customGalleryNav")
        .forEach((el) => el.remove());
    },
  },
});

document.querySelectorAll(".divImage").forEach((div) => {
  div.addEventListener("click", () => {
    const galleryName = div.getAttribute("data-gallery");
    const images = document.querySelectorAll(
      `a[data-fancybox="${galleryName}"]`
    );
    if (images.length > 0) {
      images[0].click();
    }
  });
});
