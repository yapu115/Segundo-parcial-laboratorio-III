function recuperarProductos() {
  let contador = 1;
  let carritoProductos = [];

  while (localStorage.getItem(`producto${contador}-titulo`)) {
    let tituloProducto = localStorage.getItem(`producto${contador}-titulo`);
    let precioProducto = localStorage.getItem(`producto${contador}-precio`);
    let cantidadProducto = localStorage.getItem(`producto${contador}-cantidad`);

    const producto = {
      titulo: tituloProducto,
      precio: precioProducto,
      cantidad: cantidadProducto,
    };
    carritoProductos.push(producto);
    contador++;
  }
  return carritoProductos;
}

let carrito = recuperarProductos();

function determinarImagenDeHamburguesa(nombreHamburguesa) {
  let nombrePath = nombreHamburguesa.replace(/ /g, "-");
  nombrePath = nombrePath.replace("'", "");
  console.log(nombrePath);
  let path = `../img/${nombrePath}.png`;
  return path;
}

function determinarPrecio(producto) {
  return producto["precio"] * producto["cantidad"];
}

const divCarritoContainer = document.getElementById("carrito-container");

for (let producto of carrito) {
  const divCarritoContainer = document.getElementById("carrito-container");

  const articleCompraUnidad = document.createElement("article");
  articleCompraUnidad.classList.add("compraUnidad");

  const divFotoCarrito = document.createElement("div");
  divFotoCarrito.classList.add("fotoCarrito");

  const imgHamburguesa = document.createElement("img");
  imgHamburguesa.classList.add("fotoHamburguesa");
  imgHamburguesa.src = determinarImagenDeHamburguesa(producto["titulo"]);

  divFotoCarrito.appendChild(imgHamburguesa);

  const pNombreArticulo = document.createElement("p");
  pNombreArticulo.classList.add("nombreArticulo");

  const textoNombreArticulo = document.createTextNode(producto["titulo"]);

  pNombreArticulo.appendChild(textoNombreArticulo);

  const pCantidad = document.createElement("p");
  pCantidad.classList.add("producto-cantidad-carrito");
  const textoCantidad = document.createTextNode(producto["cantidad"]);
  pCantidad.appendChild(textoCantidad);

  const pPrecio = document.createElement("p");
  pPrecio.classList.add("producto-precio-carrito");

  const textoPrecio = document.createTextNode(determinarPrecio(producto));
  pPrecio.appendChild(textoPrecio);

  articleCompraUnidad.appendChild(divFotoCarrito);
  articleCompraUnidad.appendChild(pNombreArticulo);
  articleCompraUnidad.appendChild(pCantidad);
  articleCompraUnidad.appendChild(pPrecio);

  divCarritoContainer.appendChild(articleCompraUnidad);
}
