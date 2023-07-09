
fetch('./json/products.json')
    .then(response => response.json())
    .then(data => {
        cargarCardsJuegos(data)
    })
    .catch(error => {
        console.log("Error al cargar el archivo JSON:", error);
    });


