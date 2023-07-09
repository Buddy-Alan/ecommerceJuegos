
cargarCarrouselProductsIndex = (imgCarrousel) => {
    let htmlCarrousel = ""
    for (let i = 0; i < imgCarrousel.length; i++) {
        if (i == 0) {
            htmlCarrousel += `
            <div class="carousel-item active">
      <img src="./imagenes/Index/${imgCarrousel[i].url}"  class="d-block imgIndex" alt="${imgCarrousel[i].name}" title="${imgCarrousel[i].name}" >
    </div>
        `
        }
        else {
            htmlCarrousel += `
            <div class="carousel-item">
      <img src="./imagenes/Index/${imgCarrousel[i].url}"  class="d-block imgIndex" alt="${imgCarrousel[i].name}" title="${imgCarrousel[i].name}">
    </div>
        `
        }
    }
    const cardProductsIndex = document.getElementById("carrouselImagen")
    cardProductsIndex.innerHTML = htmlCarrousel
}