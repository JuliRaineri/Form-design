/*
Validar todos los campos del formulario "Crear cuenta",
asegurando que se cumplan estas condiciones:

1) Todos los campos son requeridos.
2) El texto de "Contraseña" y "Confirmar contrasena"
   debe ser idéntico.

Si estas condiciones se cumplen, mostrar con window.alert()
el siguiente mensaje:

¡Te damos la bienvenida, (nombre)! Te enviamos
un e-mail a (email) con indicaciones.
*/

// -------------------------------------------------

// 1. Accedemos con querySelector a cada uno de los
//    elementos del formulario y los guardamos en
//    constantes.

// 2. Programamos un evento click para el botón,
//    que realice las siguientes acciones:

// a. Validar que todos los campos tengan algún valor.

// b. Validamos utilizando un if si los campos
//    "Contraseña" y "Confirmar contraseña" son
//    iguales. Devolvemos true si son iguales.

// c. Mostrar el mensaje de bienvenida con window.alert().

// -------------------------------------------------
const inputFirstName = document.querySelector ("#first-name") ;
const inputLastName = document.querySelector ("#last-name") ;
const inputEmail = document.querySelector ("#email") ;
const inputPassword = document.querySelector ("#password") ;
const inputConfirmPassword = document.querySelector ("#confirm-password") ;
const inputCreateButton = document.querySelector ("#create-button") ;




const registrar1 = () => {
  if (inputNombre.value === ""){
    alert('Por favor completar todos los campos'); 
    return; 
  }

  if (inputApellido.value === ""){
    alert('Por favor completar todos los campos'); 
    return; 
  }

  if (inputEmail.value === ""){
    alert('Por favor completar todos los campos'); 
    return; 
  }

  if (inputClave.value === ""){
    alert('Por favor completar todos los campos'); 
    return; 
  }

  if (inputConfirmarClave.value === ""){
    alert('Por favor completar todos los campos'); 
    return; 
  }

  // b. Validamos utilizando un if si los campos
  //    "Contraseña" y "Confirmar contraseña" son
  //    iguales. Devolvemos true si son iguales.
  if (inputClave.value !== inputConfirmarClave.value) {
    alert('Las contraseñas no coinciden')
    return;
  }

  // ¡Te damos la bienvenida, (nombre)! Te enviamos
  // un e-mail a (email) con indicaciones.
  alert('¡Te damos la bienvenida, ' + inputNombre.value + '! Te enviamos un e-mail a ' + inputEmail.value + ' con indicaciones.');  
}

// Bug: pide que todos los campos estén vacíos para mostrar el error.
// Posible solución: Cambiar && por ||
const registrar2 = () => {
  if (inputNombre.value === "" &&
      inputApellido.value === "" &&
      inputEmail.value === "" &&
      inputClave.value === "" &&
      inputConfirmarClave.value === ""){
    alert('Por favor completa todos los campos');
    return;
  }

  if (inputClave.value !== inputConfirmarClave.value) {
    alert('Las contraseñas no coinciden')
    return;
  }

  // ¡Te damos la bienvenida, (nombre)! Te enviamos
  // un e-mail a (email) con indicaciones.
  alert('¡Te damos la bienvenida, ' + inputNombre.value + '! Te enviamos un e-mail a ' + inputEmail.value + ' con indicaciones.');  
}

// Solución: Preguntar por cada campo, uniendo con el operador lógico OR (||).
const registrar2PosibleSolucion1 = () => {
  if (inputNombre.value === "" ||
      inputApellido.value === "" ||
      inputEmail.value === "" ||
      inputClave.value === "" ||
      inputConfirmarClave.value === ""){
    alert('Por favor completa todos los campos');
    return;
  }

  if (inputClave.value !== inputConfirmarClave.value) {
    alert('Las contraseñas no coinciden')
    return;
  }

  // ¡Te damos la bienvenida, (nombre)! Te enviamos
  // un e-mail a (email) con indicaciones.
  alert('¡Te damos la bienvenida, ' + inputNombre.value + '! Te enviamos un e-mail a ' + inputEmail.value + ' con indicaciones.');  
}

// Bug: pide que todos los campos estén vacíos para mostrar el error.
const registrar3 = () => {
  if (inputNombre.value +
      inputApellido.value +
      inputEmail.value +
      inputClave.value +
      inputConfirmarClave.value === ""){
    alert('Por favor completa todos los campos');
    return;
  }

  if (inputClave.value !== inputConfirmarClave.value) {
    alert('Las contraseñas no coinciden')
    return;
  }

  // ¡Te damos la bienvenida, (nombre)! Te enviamos
  // un e-mail a (email) con indicaciones.
  alert('¡Te damos la bienvenida, ' + inputNombre.value + '! Te enviamos un e-mail a ' + inputEmail.value + ' con indicaciones.');  
}

// Armar una lista y aplicar un filtro. Si queda algún elemento
// en el filtro, mostrar error.
const registrar4 = () => {
  const listaInput = [
    inputNombre.value, inputApellido.value,
    inputEmail.value, inputClave.value,
    inputConfirmarClave.value
  ];

  const camposIncompletos = listaInput.filter((input) => {
    return input === '';
  })

  if (camposIncompletos.length > 0) {
    alert('Por favor completa todos los campos');
    return;
  }

  if (inputClave.value !== inputConfirmarClave.value) {
    alert('Las contraseñas no coinciden')
    return;
  }

  alert('¡Te damos la bienvenida, ' + inputNombre.value + '! Te enviamos un e-mail a ' + inputEmail.value + ' con indicaciones.');  
};

const registrar4b = () => {
  const listaInputs = [
    inputNombre, inputApellido, inputEmail,
    inputClave, inputConfirmarClave
  ];

  // condicion(elemento1) && condicion(elemento2) && condicion(elementoN)
  if (!listaInputs.every(input => input !== '')) {
    alert('Por favor completa todos los campos');
    return;
  }

  // condicion(elemento1) || condicion(elemento2) || condicion(elementoN)
  if (listaInputs.some(input => input === '')) {
    alert('Por favor completa todos los campos');
    return;
  }


  // Equivalencias
  //     listaInputs.some(input => input === '') 
  // === listaInputs.filter(input => input === '').length > 0
  // === listaInputs.find(input => input === '') !== undefined
  // === listaInputs.indexOf('') > -1
  // === listaInputs.includes('')

  if (inputClave.value !== inputConfirmarClave.value) {
    alert('Las contraseñas no coinciden')
    return;
  }

  alert('¡Te damos la bienvenida, ' + inputNombre.value + '! Te enviamos un e-mail a ' + inputEmail.value + ' con indicaciones.');  
};


const registrar5 = () => {
  // Lista de nodos (NodeList)
  // const inputs = document.querySelectorAll("#formulario-crear-cuenta input");

  // Lista de valores (Array) usando Array.from
  const inputsArray = Array.from(document.querySelectorAll("#formulario-crear-cuenta input"));

  // Lista de valores (Array) usando el operador de distribución
  // const inputsArray = [...document.querySelectorAll("#formulario-crear-cuenta input")];
}

const validarCamposVacios = (idFormulario) => {
  const inputsArray = Array.from(document.querySelectorAll("#" + idFormulario + " input"));

  if (inputsArray.some(input => input.value === '')) {
    alert("Por favor completa todos los campos");
  } 
  else{
    if (inputPassword.value !== inputConfirmPassword.value) {
        alert('Las contraseñas no coinciden')
        return;
      }
  else {
    alert('¡Te damos la bienvenida!');    
  }
}


botonRegistrar.addEventListener("click", () => {
  validarCamposVacios('formulario-crear-cuenta');
});



/*
function miFuncion() {
  // ...
}

lista.filter(function () {
  // ...
})

const miFuncion = () => {

};

lista.filter(() => {

});
*/