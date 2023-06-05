"use strict"

const MAX_Newsletter = 10000;
const MIN_Newsletter = 1000;

let formNewsletter = document.querySelector("#form-newsletter");
let captchaNewsletter = document.querySelector("#captcha-newsletter");
let mensajeNewsletter = document.querySelector("#mensajeDeSeguridad-newsletter");
let segurityCodeNewsletter;

formNewsletter.addEventListener("submit", validarNewsletter);
codigoSeguridadNewsletter();
//Funcion para generar nro entre 1000 y 9999
function codigoSeguridadNewsletter() {
    segurityCodeNewsletter = Math.floor((Math.random() * (MAX - MIN) + MIN));
    captchaNewsletter.innerHTML = segurityCodeNewsletter;
}
//Funcion para validar formulario newsletter
function validarNewsletter(e) {
    e.preventDefault();
    let inputClave = document.querySelector("#clave-newsletter");
    let formData = new FormData(formNewsletter);

    let nombre = formData.get('nombre');
    let email = formData.get('email');
    let clave = formData.get('validacion');

    if (clave != segurityCodeNewsletter) {
        mensajeNewsletter.innerHTML = "Ha ingresado incorrectamente el codigo de seguridad. Pruebe de vuelta.";
        mensajeNewsletter.classList.add("colorRED");
        codigoSeguridadNewsletter();
        inputClave.value = ""
    }
    else {
        mensajeNewsletter.innerHTML = "Sus datos se enviaron correctamente";
        mensajeNewsletter.classList.remove("colorRED");
        codigoSeguridadNewsletter();
        inputClave.value = ""
    }
}