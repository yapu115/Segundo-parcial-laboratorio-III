// Obtener el carrito de productos
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

// Conseguir el path de una imagen a partir de su nombre
function determinarImagenDeHamburguesa(nombreHamburguesa) {
  let nombrePath = nombreHamburguesa.replace(/ /g, "-");
  console.log(nombrePath);
  let path = `../img/${nombrePath}.png`;
  return path;
}

// Calcular el precio total de un producto
function determinarPrecio(producto) {
  return producto["precio"] * producto["cantidad"];
}

// Mostrar los productos agregados al carrito
const divCarritoContainer = document.getElementById("carrito-container");

for (let producto of carrito) {
  const divCarritoContainer = document.getElementById("carrito-container");

  // Creación de todos los productos en el carrito
  const articleCompraUnidad = document.createElement("article");
  articleCompraUnidad.classList.add("compraUnidad");

  const pFotoCarrito = document.createElement("p");
  pFotoCarrito.classList.add("fotoCarrito");

  const imgHamburguesa = document.createElement("img");
  imgHamburguesa.classList.add("fotoHamburguesa");
  imgHamburguesa.src = determinarImagenDeHamburguesa(producto["titulo"]);

  pFotoCarrito.appendChild(imgHamburguesa);

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

  const textoPrecio = document.createTextNode(`$${determinarPrecio(producto)}`);
  pPrecio.appendChild(textoPrecio);

  const pBorrar = document.createElement("p");
  const btnBorrar = document.createElement("button");
  btnBorrar.classList.add("btn-borrar");
  btnBorrar.type = "button";

  const imgTacho = document.createElement("img");
  imgTacho.classList.add("imgTacho");
  imgTacho.src = "../img/eliminar.png";

  btnBorrar.appendChild(imgTacho);
  pBorrar.appendChild(btnBorrar);

  articleCompraUnidad.appendChild(pFotoCarrito);
  articleCompraUnidad.appendChild(pNombreArticulo);
  articleCompraUnidad.appendChild(pCantidad);
  articleCompraUnidad.appendChild(pPrecio);
  articleCompraUnidad.appendChild(pBorrar);

  divCarritoContainer.appendChild(articleCompraUnidad);
}

// Borrar producto
const botonesEliminar = document.querySelectorAll(".btn-borrar");

for (let boton of botonesEliminar) {
  boton.addEventListener("click", () => {
    // Eliminación del elemento en tiempo real
    boton.parentElement.parentElement.remove();

    // Actualización de los datos del carrito en localStorage
    let contador = 1;
    let nombreProducto =
      boton.parentElement.parentElement.children[1].innerHTML;

    while (localStorage.getItem(`producto${contador}-titulo`)) {
      if (
        nombreProducto === localStorage.getItem(`producto${contador}-titulo`)
      ) {
        localStorage.setItem(
          `producto${contador}-titulo`,
          localStorage.getItem(`producto${contador + 1}-titulo`)
        );
        localStorage.setItem(
          `producto${contador}-cantidad`,
          localStorage.getItem(`producto${contador + 1}-cantidad`)
        );
        localStorage.setItem(
          `producto${contador}-precio`,
          localStorage.getItem(`producto${contador + 1}-precio`)
        );

        localStorage.removeItem(`producto${contador + 1}-titulo`);
        localStorage.removeItem(`producto${contador + 1}-cantidad`);
        localStorage.removeItem(`producto${contador + 1}-precio`);
      }

      contador++;
    }
  });
}
