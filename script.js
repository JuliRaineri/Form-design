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




// Solución: Preguntar por cada campo, uniendo con el operador lógico OR (||).
const createAccountButton = () => {
  if (inputFirstName.value === "" ||
  inputLastName.value === "" ||
      inputEmail.value === "" ||
      inputPassword.value === "" ||
      inputConfirmPassword.value === ""){
    alert('Por favor completa todos los campos');
    return;
  }

  if (inputPassword.value !== inputConfirmPassword.value) {
    alert('Las contraseñas no coinciden')
    return;
  }

  // ¡Te damos la bienvenida, (nombre)! Te enviamos
  // un e-mail a (email) con indicaciones.
  alert('¡Te damos la bienvenida, ' + inputFirstName.value + '! Te enviamos un e-mail a ' + inputEmail.value + ' con indicaciones.');  
}

inputCreateButton.addEventListener("click", createAccountButton);
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