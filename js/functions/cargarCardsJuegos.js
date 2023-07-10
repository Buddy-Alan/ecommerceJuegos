
const genero = [{
  "id": 1,
  "genero": "Juego de accion"
},
{
  "id": 2,
  "genero": "Juego de terror"
}
]

const urlParams = new URLSearchParams(window.location.search);
const producto = urlParams.get("producto");
const generoJuego = urlParams.get("genero");
const cargarCardsJuegos = (datosParaCards) => {
  let htmlCards = ""
  productoAPonerEnCards = datosParaCards
  if (producto != null && producto != "") {
    productoAPonerEnCards = datosParaCards.filter(juego => juego.name.toLowerCase().includes(producto.toLowerCase()))
  } else if (generoJuego != null && generoJuego != "") {
    productoAPonerEnCards = datosParaCards.filter(juego => juego.generoJuego == generoJuego)
  }
  if (productoAPonerEnCards.length == 0) {
    htmlCards = `<h6>Su busqueda de ${producto} no fue encontro ningun producto</h6>`
  }
  else {
    productoAPonerEnCards.forEach(card => {
      const priceProduct = parseFloat(card.price).toLocaleString('es')
      const generoBuscado = genero.find((e) => e.id == card.generoJuego)
      htmlCards += `<div class="card cardProductIndex" >
  <img src="./imagenes/cardProductos/${card.url}" class="card-img-top cardImgProduct" alt="${card.name}">
  <div class="card-body">
    <h5 class="card-title">${card.name}</h5>
    <p class="card-text">${generoBuscado.genero}</p>
    <pre class="card-text cardPrice">$${priceProduct}</pre>
    <a href="#" class="btn btn-primary" id="btnIrAProducto">Ir a Producto</a>
  </div>
</div>`
    })

  };
  const carrouselImg = document.getElementById("cardProductsIndex")
  carrouselImg.innerHTML = htmlCards
}