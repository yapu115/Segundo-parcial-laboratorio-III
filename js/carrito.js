let carrito = [];
let total = 0;

const botonesAgregarCarrito = document.querySelectorAll(".btn");

for (let boton of botonesAgregarCarrito) {
  boton.addEventListener("click", () => {
    const tituloHamburguesa = document.querySelector(".titulo");
    const precioHamburguesa = document.getElementById("precio");

    const nuevoProducto = {
      titulo: tituloHamburguesa,
      precio: precioHamburguesa,
    };
    carrito.push(nuevoProducto);
  });
}

console.log(carrito);
console.log(total);
