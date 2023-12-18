const presupuestoBtn = document.getElementById("btnPresupuesto");

const divPrespuesto = document.getElementById('collapseExample');
let presupuestoTotal = 0



function modificarPresupuesto(presupuestoTotal){
  if(presupuesto) {
    const info = document.getElementsByTagName('small')[0];
    info.textContent = `Presupuesto disponible: $ ${presupuestoTotal}`
    info.marginTop = '14px' 
    info.style.display = 'block'
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
      modificarPresupuesto(presupuestoTotal)
      const imgJsDinero = document.getElementsByClassName("img")[0];
    if(imgJsDinero){
      imgJsDinero.src = "./asset/img/dinero.png";
    } else {
      console.error("El elemento con ese className no se encontró");

    }
      
      const tituloPrimerBanner = document.getElementsByTagName('h6')[0];
      const textoBannerJs = document.getElementsByTagName('small')[0];

      tituloPrimerBanner.innerText = ''
      textoBannerJs.style.display = 'none';
      
      modificarPresupuesto(presupuestoTotal);

    } 
    else {
    }
    
    divPrespuesto.style.display = 'none';

  }
// btn cancelar presupuesto

const btnCancelar = document.getElementById('btnCancelarPresu')

  btnCancelar.addEventListener('click', (e)=>{
    divPrespuesto.style.display = 'none';
  })

  const btnPresu = document.querySelector('#btnPresu');
  
  btnPresu.addEventListener('click', (e)=>{
    const divPrespuesto = document.getElementById('collapseExample');
    
    divPrespuesto.style.display = 'block';
  })

});

// mostrando los gastos
// Suponiendo que btnGasto es el botón y nombreDeGasto es el campo de entrada
const btnGasto = document.getElementById('btnGasto');
const nombreDeGastoInput = document.getElementById('nombreDeGasto');
const valorDeGastoInput = document.getElementById('costoDeGasto')



btnGasto.addEventListener('click', (x) => {
  // Obtener el valor del campo de entrada
  const nombreDeGasto = nombreDeGastoInput.value;
  const valorDeGasto = parseFloat(valorDeGastoInput.value);

  
  if (isNaN(valorDeGasto) || valorDeGasto <= 0) {
    alert('Por favor, ingrese un valor numérico válido para el gasto.');
    return;
  }

     if(nombreDeGasto === '') {
    alert('Por favor, ingrese un nombre para el gasto.');
    return
  } else if(valorDeGasto > presupuestoTotal) {
    alert('El gasto no puede ser mayor que el presupuesto disponible')
    return
  }

    // Crear un nuevo elemento de lista
    const listaGastos = document.createElement('li');
    listaGastos.classList = ('gastosLi')
    
    // Establecer el contenido de texto del elemento de lista
    presupuestoTotal -= valorDeGasto;
    modificarPresupuesto(presupuestoTotal)
    
    listaGastos.textContent = `${nombreDeGasto}: $${valorDeGasto} || Presupuesto Actual: $${presupuestoTotal}`;
    // modificando el presupuesto general
    // Obtener el contenedor de la lista (sustituye '.listaGastos' con tu clase real)
    const divGastos = document.querySelector('.listaGastos');
    divGastos.classList = 'col-12 col-lg-12 col-md-6 listaGastos'
    divGastos.style.display = 'block'

    // Agregar el nuevo elemento de lista al contenedor
    divGastos.appendChild(listaGastos); 
    // debo agregarle un boton para editar, y uno para borrarlo de la lista. 
    let btnEditar = document.createElement('button') 
    btnEditar.textContent = "Editar"  
    btnEditar.classList = 'btn btn-primary btnEditar'
    
    listaGastos.appendChild(btnEditar);

    let btnBorrar = document.createElement('button')
    btnBorrar.textContent = "X"
    btnBorrar.classList = 'btn btn-danger btnEditar'
    
    listaGastos.appendChild(btnBorrar);
    const divCollapse2 = document.getElementById('collapseExample2')

    divCollapse2.style.display = 'none'

    // Actualizar presupuesto en el titulo 
    const divPresu = document.getElementById('divPresu');

  })


const btnCancelarGasto = document.getElementById('btnCancelarGasto');

btnCancelarGasto.addEventListener('click',(e)=>{
  const divCollapse2 = document.getElementById('collapseExample2')

  divCollapse2.style.display = 'none'
})

const btnInputGasto = document.getElementById('gastoInputBtn');

btnInputGasto.addEventListener('click', (e)=> {
  const divCollapse2 = document.getElementById('collapseExample2');

  divCollapse2.style.display = 'block';
})


