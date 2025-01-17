document.addEventListener("DOMContentLoaded", mostrarProductos);

let productos = [
  { id: 1, nombre: "Camisa", precio: 20.99 },
  { id: 2, nombre: "Pantalón", precio: 35.5 },
  { id: 3, nombre: "Zapatos", precio: 50.0 },
];

function mostrarProductos() {
  let tablaBody = document.querySelector("#tabla-productos tbody");

  productos.forEach((producto) => {
    let fila = document.createElement("tr");

    let celdaNombre = document.createElement("td");
    celdaNombre.textContent = producto.nombre;

    let celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = `$${producto.precio.toFixed(2)}`;

    let celdaAcciones = document.createElement("td");
    let botonDestacar = document.createElement("button");
    botonDestacar.textContent = "Destacar";

    botonDestacar.addEventListener("click", () => {
      fila.classList.toggle("destacado");
    });

    celdaAcciones.appendChild(botonDestacar);

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaAcciones);

    tablaBody.appendChild(fila);
  });
}
