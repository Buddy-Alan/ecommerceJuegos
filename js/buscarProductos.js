botonBuscador = document.querySelector("#botonBuscador")
inputBuscarProducto = document.getElementById("inputBuscarProducto")
console.log(botonBuscador)
botonBuscador.addEventListener("click", (ev) => {
    ev.preventDefault();
    let url = `index.html?producto=${inputBuscarProducto.value}#tituloIndex`;
    window.location.href = url;
})