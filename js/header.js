const header = document.querySelector("#header")
header.innerHTML =
  `<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand navBarText" href="index.html">Rincon Gaming</a>
    <button class="navbar-toggler navBarText" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon navBarText"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark navBarText" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">El Rincon Gaming</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active navBarText" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link navBarText" href="index.html?genero=1#tituloIndex">Juegos Accion</a>
          </li>
                    <li class="nav-item">
            <a class="nav-link navBarText" href="index.html?genero=2#tituloIndex">Juegos Terror</a>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" id="inputBuscarProducto" placeholder="Buscar Producto" aria-label="Search">
          <button class="btn btn-success" id="botonBuscador" type="submit">Buscar</button>
        </form>
      </div>
    </div>
  </div>
</nav>

</nav>`