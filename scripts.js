let botonContinuar = document.querySelector('.btnContinuar');
let botonPregunta = document.querySelector('.btnPregunta');
let botonSi = document.querySelector('.btnSi');
let botonNo = document.querySelector('.btnNo');

let botonRecarga = document.querySelector('.botonRecarga');
botonRecarga.addEventListener('click', function() {
    location.reload();
});

botonContinuar.addEventListener("click", ocultarDiv);
function ocultarDiv() {
    let divHello = document.querySelector('.hello');
    let divMensaje = document.querySelector('.message');
    divHello.style.display = "none"; 
    divMensaje.style.display = "flex"; 
}

botonPregunta.addEventListener("click", ocultarDivMensaje);
function ocultarDivMensaje() {
    let divMensaje = document.querySelector('.message');
    let divPregunta = document.querySelector('.pregunta');
    divMensaje.style.display = "none"; 
    divPregunta.style.display = "flex"; 
}

botonSi.addEventListener("click", ocultarDivPregunta);
function ocultarDivPregunta() {
    let divPregunta = document.querySelector('.pregunta');
    let divSi = document.querySelector('.si');
    divPregunta.style.display = "none"; 
    divSi.style.display = "flex"; 
}

let tamañoActual = 100;
botonNo.addEventListener("click", sumarYCambiarTamañoBtnSi);

function sumarYCambiarTamañoBtnSi() {
    tamañoActual += 20;
    botonSi.style.width = `${tamañoActual}px`;
    botonSi.style.height = `${tamañoActual}px`;
}