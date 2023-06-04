"use strict"

const MAX = 10000;
const MIN = 1000;

let mensaje = document.querySelector("#mensajeDeSeguridad");
let captcha = document.querySelector("#captcha");
let form = document.querySelector("#form-reserva");
let segurityCode;

let infoReserva = {
    nombre: "Nombre",
    email: "name@email.com",
    cantidad: 1,
    fecha: " ",
    hora: " "
}

form.addEventListener("submit", validar);
codigoSeguridad();


function codigoSeguridad(){
    segurityCode = Math.floor((Math.random()*(MAX - MIN)+MIN));
    captcha.innerHTML = segurityCode; 
}

function validar(e){

    let inputClave = document.querySelector("#clave");
    let formData = new FormData(form);

    let nombre = formData.get('nombre');
    let email = formData.get('email');
    let cantidad = formData.get('cantidad');
    let fecha = formData.get('fecha');
    let hora = formData.get('hora');
    let clave = formData.get('validacion');
    console.log(fecha);
    console.log(hora);

    if(clave != segurityCode){
        mensaje.innerHTML = "Ha ingresado incorrectamente el codigo de seguridad. Pruebe de vuelta.";
        mensaje.classList.add("colorRED");
        codigoSeguridad();
        inputClave.value = ""
        e.preventDefault();
    }
    else{
        mensaje.innerHTML = "Sus datos se enviaron correctamente";
        mensaje.classList.remove("colorRED");
        codigoSeguridad();
        inputClave.value = ""
    }
}