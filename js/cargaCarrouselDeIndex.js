

fetch('./json/carrousel.json')
    .then(response => response.json()) // Parsea la respuesta como JSON
    .then(imgCarrousel => {
        // Accede a los datos del JSON
        cargarCarrouselProductsIndex(imgCarrousel)
    })
    .catch(error => {
        console.log("Error al cargar el archivo JSON:", error);
    });

