let carrito = [];
let total = 0;

const botonesAgregarCarrito = document.querySelectorAll(".btnCarrito");

for (let boton of botonesAgregarCarrito) {
  boton.addEventListener("click", () => {
    const divTituloHamburguesa = document.querySelector(".titulo");
    const h2PrecioHamburguesa = document.getElementById("precio");

    let tituloHamburguesa = divTituloHamburguesa.innerHTML;
    let precioHamburguesa = h2PrecioHamburguesa.innerHTML.replace("$", "");

    const nuevoProducto = {
      titulo: tituloHamburguesa,
      precio: precioHamburguesa,
    };

    total += parseFloat(precioHamburguesa);
    carrito.push(nuevoProducto);

    console.log(carrito);
    console.log(total);
  });
}
