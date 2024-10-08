function Nota(nom, tipus) {
    this.nom = nom;
    this.tipus = tipus;
}

let cerca = [];

let partitures = [
    { nom: "La Balanguera", notes: [new Nota("DO", ""), new Nota("RE", ""), new Nota("MI", ""), new Nota("FA", ""), new Nota("FA", ""), new Nota("SOL", ""), new Nota("SOL", ""), new Nota("LA#", ""), new Nota("LA#", "")] },
    { nom: "Happy Birthday", notes: [new Nota("DO", ""), new Nota("DO", ""), new Nota("RE", ""), new Nota("DO", ""), new Nota("FA", ""), new Nota("MI", ""), new Nota("DO", ""), new Nota("DO", ""), new Nota("RE", ""), new Nota("DO", ""), new Nota("SOL", ""), new Nota("FA", "")] }
];

function addCerca(nom, tipus) {
    let novaNota = new Nota(nom, tipus);
    cerca.push(novaNota);
}

var notesCerca = [
    new Nota("DO","")
];

function compararNotes(nota1, nota2) {
    return nota1.nom === nota2.nom && nota1.tipus === nota2.tipus;
}

function cercador() {    
    let textCerca = "Cerca: ";
    for (let i = 0; i < notesCerca.length; i++) {
        textCerca += notesCerca[i].nom + " ";
    }
    console.log(textCerca);

    partitures.forEach(function(partitura) {
        for (let i = 0; i <= partitura.notes.length - notesCerca.length; i++) {
            let trobada = true;
            for (let j = 0; j < notesCerca.length; j++) {
                if (!compararNotes(partitura.notes[i + j], notesCerca[j])) {
                    trobada = false;
                    break;
                }
            }
            if (trobada) {
                console.log(partitura.nom);
                break;
            }
        }
    });
}

addCerca("DO", "");
addCerca("RE", "");
cercador();

cerca = [];

addCerca("LA#", "");
cercador();