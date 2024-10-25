const simbolos = ['hearts', 'diamonds', 'clubs', 'spades'];
const valores = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

function crearMazo() {
    let mazo = [];
    for (let simbolo of simbolos) {
        for (const valor of valores) {
            mazo.push({valor, simbolo});
        }
    }
    return mazo;
}

// function barajar(mazo) {
//     for (let i = mazo.length -1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i+1));
//         [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
//     }
//     return mazo;
// }

function barajar(mazo) {
    for (let i = 0; i < mazo.length; i++) {
        let j = Math.floor(Math.random() * (mazo.length - i)) + i;        
        [mazo[i], mazo[j]] = [mazo[j], mazo[i]];
    }
    return mazo
}

function jugar() {
    let mazo = barajar(crearMazo());

    let mano = mazo.slice(0, 5);

    // console.log(mazo);
    mostrarCartas(mano);

    if (hayPareja(mano)) {
        document.getElementById('resultat').textContent = "Has guanyat!";
    } else {
        document.getElementById('resultat').textContent = "No has guanyat";
    }
}

function mostrarCartas(mano) {
    let cartesDiv = document.getElementById('cartes');
    cartesDiv.innerHTML = ''; // Limpiar cartas anteriores

    mano.forEach(carta => {
        let valor = carta.valor;

        // Ajustar para los valores especiales
        if (valor === 'J') valor = 'jack';
        if (valor === 'Q') valor = 'queen';
        if (valor === 'K') valor = 'king';
        if (valor === 'A') valor = 'ace';

        let cartaImg = document.createElement('img');
        // Ajustar la ruta correctamente
        cartaImg.src = `./cards/${valor}_of_${carta.simbolo}.png`; 
        cartaImg.alt = `${carta.valor} de ${carta.simbolo}`; // Texto alternativo para accesibilidad
        cartaImg.style.width = '100px'; // Ajustar el tamaño de las imágenes si es necesario
        cartesDiv.appendChild(cartaImg);
    });
}

function hayPareja(mano) {
    let valores = mano.map(carta => carta.valor);
    let conteo = {};

    valores.forEach(valor => {
        conteo[valor] = (conteo[valor] || 0) + 1;        
    });

    return Object.values(conteo).some(count => count === 2);
}
