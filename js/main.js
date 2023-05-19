"use strict"

const MAX = 10000;
const MIN = 1000;

let mensaje = document.querySelector("#mensajeDeSeguridad");
let captcha = document.querySelector("#captcha");
let form = document.querySelector("#form");
let segurityCode;

form.addEventListener("submit", validar);
codigoSeguridad();

function codigoSeguridad(){
    segurityCode = Math.floor((Math.random()*(MAX - MIN)+MIN));
    captcha.innerHTML = segurityCode; 
}

function validar(e){
    e.preventDefault();
    let inputClave = document.querySelector("#clave");
    let formData = new FormData(form);

    let nombre = formData.get('nombre');
    let email = formData.get('email');
    let clave = formData.get('validacion');

    if(clave != segurityCode){
        mensaje.innerHTML = "Ha ingresado incorrectamente el codigo de seguridad. Pruebe de vuelta.";
        mensaje.classList.add("colorRED");
        codigoSeguridad();
        inputClave.value = ""
    }
    else{
        mensaje.innerHTML = "Sus datos se enviaron correctamente";
        mensaje.classList.remove("colorRED");
        codigoSeguridad();
        inputClave.value = ""
    }
}