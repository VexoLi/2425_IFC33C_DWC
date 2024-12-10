// Dades
let partitures = [
    { title: "La Balanguera", language: "ca" },
    { title: "Merry Christmas", language: "en" },
    { title: "Frère Jacques", language: "fr" },
    { title: "Sant Antoni i el Dimoni", language: "ca" },
  ];
  
  // Generar 100 registres
  const generateData = () => {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push(partitures[i % partitures.length]);
    }
    return data;
  };
  
  // Crear la taula
  const createTable = () => {
    const tableContainer = document.getElementById("table-container");
    let table = document.createElement("table");
  
    // Crear el encabezado
    let thead = document.createElement("thead");
    let headRow = document.createElement("tr");     
  
    // Columnes
    let columns = ["Títol", "Idioma Original", "Accions"];
    columns.forEach((element) => {
      let th = document.createElement("th");
      th.textContent = element;
      headRow.appendChild(th);
    });
  
    thead.appendChild(headRow);
    table.appendChild(thead);
  
    // Crear el cuerpo de la tabla
    let tbody = document.createElement("tbody");
    let data = generateData();
  
    data.forEach((item, index) => {
      let row = document.createElement("tr");
  
      // Títol de la columna
      let titleCell = document.createElement("td");
      titleCell.textContent = item.title;
      row.appendChild(titleCell);
  
      // Idioma
      let languageCell = document.createElement("td");
      languageCell.textContent = item.language;
      row.appendChild(languageCell);
  
      // Accions
      let actionsCell = document.createElement("td");
      actionsCell.className = "actions";
  
      let editButton = document.createElement("button");
      editButton.className = "btn btn-primary btn-sm";
      editButton.innerHTML = `<i class="fas fa-edit"></i> Editar`;
      editButton.title = "Editar";
      actionsCell.appendChild(editButton);
  
      let deleteButton = document.createElement("button");
      deleteButton.className = "btn btn-danger btn-sm";
      deleteButton.innerHTML = `<i class="fas fa-trash-alt"></i> Esborrar`;
      deleteButton.title = "Esborrar";
      actionsCell.appendChild(deleteButton);
  
      deleteButton.addEventListener("click", () => {
        esborrar(index, row);
      })

      actionsCell.appendChild(deleteButton);
      row.appendChild(actionsCell);
      tbody.appendChild(row);
    });
  
    table.appendChild(tbody);
    tableContainer.appendChild(table);
  };
  
  function esborrar(index, row) {
    const confirmacio =  confirm("Vols esborrar aquesta partitura?");
    if (confirmacio) {
      alert("Element esborrat");
    } else {
      alert("Acció cancel·lada");
    }
  }

  // Llamar a la función para crear la tabla
  createTable();
  

  document.addEventListener("DOMContentLoaded", () => {
    const loginLink = document.getElementById("login-link");
    const loginModal = document.getElementById("login-modal");
    const closeModal = document.getElementById("close-modal");

    loginLink.addEventListener("click", (e) => {
      e.preventDefault();
      loginModal.classList.remove("hidden");
      loginModal.style.display = "flex";
    });

    closeModal.addEventListener("click", () => {
      loginModal.classList.add("hidden");
      loginModal.style.display = "none";
    });

    loginModal.addEventListener("click", (e) => {
      if (e.target === loginModal) {
        loginModal.classList.add("hidden");
        loginModal.style.display = "none";
      }
    });
  });

  