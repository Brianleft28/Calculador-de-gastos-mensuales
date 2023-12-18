const presupuestoBtn = document.getElementById("btnPresupuesto");

const divPrespuesto = document.getElementById('collapseExample');



// Evento del boton presupuesto
presupuestoBtn.addEventListener("click", (x) => {

  let presupuesto = document.getElementById("presupuesto");
  presupuesto = presupuesto.value;   // Tomo el valor del input, cambio el contenido del primer div por la información del presupuesto
  
  if (presupuesto) {
       presupuesto.value = ''
    const imgJsDinero = document.getElementsByClassName("img")[0];
    if (imgJsDinero) {
      imgJsDinero.src = "./asset/img/dinero.png";
    } else {
      console.error("El elemento con ese className no se encontró");
    }
  
    const tituloPrimerBanner = document.getElementsByTagName('h6')[0];
    const textoBannerJs = document.getElementsByTagName('small')[0];
    
 
    tituloPrimerBanner.innerText = ''
    textoBannerJs.style.display = 'none';
    
    const nuevoElemento = document.createElement('p');
  
    nuevoElemento.textContent = `Tu presupuesto disponible es de $${presupuesto}`
    nuevoElemento.style.marginTop = '14px'
  
    const divJavascript = document.getElementsByClassName('presupuesto')[0];
  
    divJavascript.appendChild(nuevoElemento)
    presupuesto.value = ''

    
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

btnGasto.addEventListener('click', (x) => {
  // Obtener el valor del campo de entrada
  const nombreDeGasto = nombreDeGastoInput.value;

  if (nombreDeGasto === '') {
    alert('Por favor, ingrese un nombre.');
  } else {
    // Crear un nuevo elemento de lista
    const listaGastos = document.createElement('li');
    listaGastos.classList = ('gastosLi')
    
    // Establecer el contenido de texto del elemento de lista
    listaGastos.textContent = `${nombreDeGasto}`;

    // Obtener el contenedor de la lista (sustituye '.listaGastos' con tu clase real)
    const divGastos = document.querySelector('.listaGastos');
    divGastos.classList = 'col-12 col-lg-12 col-md-6 listaGastos'
    divGastos.style.display = 'block'

    // Agregar el nuevo elemento de lista al contenedor
    divGastos.appendChild(listaGastos);
  }
});

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


