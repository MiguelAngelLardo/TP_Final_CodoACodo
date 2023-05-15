var formulario = document.getElementsByName('formulario')[0],
elementos = formulario.elements,
boton = document.getElementById('b1');

formulario.addEventListener("submit", function(e) {
var algunError = false;
var mensajeError = document.getElementById('mensajeError')

if (formulario.nombre.value == '' || formulario.ciudad.value == '' || formulario.telefono.value == '' || formulario.email.value == '' || formulario.mayores.value == '' || formulario.menores.value == '') {
  mensajeError.textContent = "*Completa TODOS los campos por favor.";
  algunError = true;
}

if (formulario.ingreso.value == '' || formulario.salida.value == '') {
  if (!algunError) {
  mensajeError.textContent = "*Completa las fechas de ingreso y salida";
  algunError = true;
}
}

if (formulario.terminos.checked == false) {
  if (!algunError) {
    mensajeError.textContent = "*Acepta los términos y condiciones";
    algunError = true;
  }
}

if (algunError) {
  e.preventDefault(); //no se inicia el evento del click
}
});
