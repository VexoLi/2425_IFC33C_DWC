document.addEventListener("DOMContentLoaded", mostrarJugadores);

let jugadores = [
  { nombre: "Ana", puntuacion: 150 },
  { nombre: "Carlos", puntuacion: 200 },
  { nombre: "Beatriz", puntuacion: 180 }
];

function mostrarJugadores() {
  let listaJugadores = document.getElementById("lista-jugadores");
  listaJugadores.innerHTML = "";

  jugadores.forEach((jugador) => {
    let item = document.createElement("li");
    item.textContent = `${jugador.nombre}: ${jugador.puntuacion} puntos`;
    listaJugadores.appendChild(item);
    
    
    document
      .getElementById("ordenar-puntuacion")
      .addEventListener("click", ordenarPorPuntuacion);
    document
      .getElementById("ordenar-nombre")
      .addEventListener("click", ordenarPorNombre);
  });
}

const ordenarPorPuntuacion = () => {
  jugadores.sort((a, b) => b.puntuacion - a.puntuacion);
  mostrarJugadores(jugadores);
};

const ordenarPorNombre = () => {
  jugadores.sort((a, b) => a.nombre.localeCompare(b.nombre));
  mostrarJugadores(jugadores);
};
