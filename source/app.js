let presupuestoTotal = 0;

const presupuestoBtn = document.getElementById("btnPresupuesto");
const imgJsDinero = document.getElementsByClassName("img")[0];
const divPrespuesto = document.getElementById("collapseExample");

// presupuesto en local storage //
const presupuestoLocalStorage = localStorage.getItem("presupuesto");

if (presupuestoLocalStorage) {
  presupuestoTotal = parseFloat(presupuestoLocalStorage);
  modificarPresupuesto(presupuestoTotal);
  const tituloBanner = document.getElementsByTagName("h6")[0];
  tituloBanner.style.display = "none";
}

function modificarPresupuesto(presupuestoTotal) {
  const info = document.getElementsByTagName("h1")[0];

  if (presupuestoTotal) {
    info.textContent = `Presupuesto actual: $${presupuestoTotal}`;
    info.marginTop = "14px";
    info.style.display = "block";

    localStorage.setItem("presupuesto", presupuestoTotal.toString());
  } else if (presupuestoTotal <= 0) {
    info.textContent = `Te quedaste en 0 flaco.
                        Presupuesto Actual: ${presupuestoTotal}.`;
  }
}

// Evento del boton presupuesto
presupuestoBtn.addEventListener("click", (x) => {
  // Tomo el valor del input, cambio el contenido del primer div por la información del presupuesto

  if (presupuesto) {
    const presupuestoInput = document.getElementById("presupuesto");
    const nuevoPresupuesto = parseFloat(presupuestoInput.value);

    if (!isNaN(nuevoPresupuesto)) {
      presupuestoTotal = nuevoPresupuesto;
      // almacenamos en el localStorage //
      modificarPresupuesto(presupuestoTotal);

      if (imgJsDinero) {
        const src = "./asset/img/dinero.png";
        imgJsDinero.src = src;
      }

      const tituloPrimerBanner = document.getElementsByTagName("h6")[0];

      tituloPrimerBanner.innerText = "";

      modificarPresupuesto(presupuestoTotal);
    } else {
    }

    divPrespuesto.style.display = "none";
  }
  // btn cancelar presupuesto

  const btnCancelar = document.getElementById("btnCancelarPresu");

  btnCancelar.addEventListener("click", (e) => {
    divPrespuesto.style.display = "none";
  });

  const btnPresu = document.querySelector("#btnPresu");

  btnPresu.addEventListener("click", (e) => {
    const divPrespuesto = document.getElementById("collapseExample");

    divPrespuesto.style.display = "block";
  });
});

// mostrando los gastos
// Suponiendo que btnGasto es el botón y nombreDeGasto es el campo de entrada
const btnGasto = document.getElementById("btnGasto");
const nombreDeGastoInput = document.getElementById("nombreDeGasto");
const valorDeGastoInput = document.getElementById("costoDeGasto");

btnGasto.addEventListener("click", (e) => {
  // Obtener el valor del campo de entrada

  const valorDeGasto = parseFloat(valorDeGastoInput.value);
  const nombreDeGasto = nombreDeGastoInput.value;

  if (isNaN(valorDeGasto) || valorDeGasto <= 0) {
    alert("Por favor, ingrese un valor numérico válido para el gasto.");
    return;
  }

  if (nombreDeGasto === "") {
    alert("Por favor, ingrese un nombre para el gasto.");
    return;
  } else if (valorDeGasto > presupuestoTotal) {
    alert("El gasto no puede ser mayor que el presupuesto disponible");
    return;
  }

  // Crear un nuevo elemento de lista
  const listaGastos = document.createElement("li");
  listaGastos.classList = "gastosLi";

  const ID = Date.now();
  listaGastos.setAttribute("data-id", ID);

  // Establecer el contenido de texto del elemento de lista

  presupuestoTotal -= valorDeGasto;
  modificarPresupuesto(presupuestoTotal);

  listaGastos.textContent = `Gasto: ${nombreDeGasto} || Valor: $${valorDeGasto}`;

  const divGastos = document.querySelector(".listaGastos");
  divGastos.classList = "col-12 col-lg-12 col-md-12 listaGastos";
  divGastos.style.display = "block";

  // Agregar el nuevo elemento de lista al contenedor

  divGastos.appendChild(listaGastos);

  // debo agregarle un boton para editar, y uno para borrarlo de la lista.
  let btnEditar = document.createElement("button");
  btnEditar.textContent = "Editar";
  btnEditar.classList = "btn btn-primary btnEditar";

  listaGastos.appendChild(btnEditar);

  let btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Eliminar";
  btnBorrar.classList = "btn btn-danger btnBorrar";

  listaGastos.appendChild(btnBorrar);
  const divCollapse2 = document.getElementById("collapseExample2");

  divCollapse2.style.display = "none";

  btnBorrar.addEventListener("click", (e) => {
    divGastos.removeChild(listaGastos);

    presupuestoTotal = +valorDeGasto;

    const arrayGastos = []
    arrayGastos.push(nombreDeGasto, nombreDeGasto)
    
    console.table(arrayGastos)

  });
});

const btnCancelarGasto = document.getElementById("btnCancelarGasto");

btnCancelarGasto.addEventListener("click", (e) => {

  const divCollapse2 = document.getElementById("collapseExample2");
  divCollapse2.style.display = "none";

});

  
  
const btnInputGasto = document.getElementById("gastoInputBtn");

btnInputGasto.addEventListener("click", (e) => {
  const divCollapse2 = document.getElementById("collapseExample2");

  divCollapse2.style.display = "block";
});
