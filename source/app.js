const presupuestoBtn = document.getElementById("btnPresupuesto");



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
  
    const divPresupuesto = document.getElementsByClassName('presupuesto')[0];
  
    divPresupuesto.appendChild(nuevoElemento)
    presupuesto.value = ''
  }

});

// mostrando los gastos