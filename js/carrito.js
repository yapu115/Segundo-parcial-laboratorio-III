let carrito = [];
let total = 0;

const botonesAgregarCarrito = document.querySelectorAll(".btnCarrito");

for (let boton of botonesAgregarCarrito) {
  boton.addEventListener("click", () => {
    const divTituloHamburguesa = document.querySelector(".titulo");
    const h2PrecioHamburguesa = document.getElementById("precio");

    let tituloHamburguesa = divTituloHamburguesa.innerHTML;
    let precioHamburguesa = parseFloat(
      h2PrecioHamburguesa.innerHTML.replace("$", "")
    );
    let cantidad = 1;

    const nuevoProducto = {
      titulo: tituloHamburguesa,
      precio: precioHamburguesa,
      cantidad: cantidad,
    };

    let agregar = true;
    for (let producto of carrito) {
      if (producto["titulo"] === nuevoProducto["titulo"]) {
        producto["cantidad"]++;
        producto["precio"] += nuevoProducto["precio"];
        agregar = false;
      }
    }
    if (agregar) {
      carrito.push(nuevoProducto);
    }
    total += nuevoProducto["precio"];
    console.log(carrito);
    console.log(total);
  });
}

function determinarImagenDeHamburguesa(nombreHamburguesa) {
  let nombrePath = nombreHamburguesa.replace(" ", "-");
  nombrePath = nombrePath.replace("'", "");
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
  imgHamburguesa.src = determinarImagenDeHamburguesa(producto["nombre"]);

  divFotoCarrito.appendChild(imgHamburguesa);

  const pNombreArticulo = document.createElement("p");
  pNombreArticulo.classList.add("nombreArticulo");

  const textoNombreArticulo = document.createTextNode(producto["nombre"]);

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
