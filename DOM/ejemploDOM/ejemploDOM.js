function Marca(nombre){
    this.nombre = nombre;
}

function Modelo(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

var ford = new Marca("Ford");
var citroen = new Marca("Citroen");
var seat = new Marca("Seat");

var ffocus = new Marca(ford, "Focus");
var fiesta = new Marca(ford, "Fiesta");
var saxo = new Marca(citroen, "Saxo");
var c4 = new Marca(citroen, "C4");

var coches = [ffocus, fiesta, saxo, c4];
console.log(coches);

var div = document.querySelector("#app");

var table = document.createElement("Table");
table.id = "coches";

var thead = document.createElement("thead");
table.appendChild(thead)

var tr = document.createElement("tr");
thead.appendChild(tr);

var th = document.createElement("th");
thead.innerText = "Marca";
tr.appendChild(th);

var tbody = document.createElement("tbody");
table.appendChild(tbody);

for (var i = 0; i < caches.length; i++) {
    tr = document.createElement("tr");
    tbody.appendChild(tr);

    td = document.createElement("td");
    td.innerText = coches[i].modelo;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = coches[i].modelo;
    tr.appendChild(td);

}

div.appendChild(table);

table.style.backgroundColor="yellow";

console.log(table);