"use strict";

// Variables, constantes y EventListener de recervas.html
const MAX = 10000;
const MIN = 1000;
let mensajeReserva = document.querySelector("#mensajeDeSeguridad-reserva");
let captchaReserva = document.querySelector("#captcha-reserva");
let formReserva = document.querySelector("#form-reserva");
let segurityCodeReserva;
let btnEjemplo = document.querySelector("#btn-ej").addEventListener("click", mostrarEjemplos);
let btnlimpiar = document.querySelector("#btn-limpiar").addEventListener("click", limpiarTabla);
let tabla = document.querySelector("#tabla-reserva");
let contadorTabla = 0;
formReserva.addEventListener("submit", validarReserva);
let captchaNewsletter = document.querySelector("#captcha-newsletter");
let formNewsletter = document.querySelector("#form-newsletter");
let mensajeNewsletter = document.querySelector("#mensajeDeSeguridad-newsletter");
let segurityCodeNewsletter;
let seEjecutoEjemplos = false;
let infoReserva = [
    {
        nombre: "nombre",
        email: "usuario@gmail.com",
        cantidad: 1,
        fecha: "2023/01/01",
        hora: "09:00"
    },
    {
        nombre: "Juan",
        email: "juanrodriguez@gmail.com",
        cantidad: 3,
        fecha: "2023/06/12",
        hora: "10:00"
    },
    {
        nombre: "Emilia",
        email: "emilia.sandoval@hotmail.com",
        cantidad: 1,
        fecha: "2023/06/12",
        hora: "16:00"
    },
    {
        nombre: "Carlos",
        email: "calberto45@gmail.com",
        cantidad: 4,
        fecha: "2023/06/12",
        hora: "19:30"
    }
];

formNewsletter.addEventListener("submit", validarNewsletter);

// ------ Funciones de reservas.html -----

// Funcion para generar un codigo para el formulario de reservar mesa
function codigoSeguridadReserva() {
    segurityCodeReserva = Math.floor((Math.random() * (MAX - MIN) + MIN));
    captchaReserva.innerHTML = segurityCodeReserva;
}
// Funcion para validar formulario recervar tu mesa
function validarReserva(e) {
    e.preventDefault();
    let inputClave = document.querySelector("#clave-reserva");
    let formData = new FormData(formReserva);

    let nombre = formData.get('nombre');
    let email = formData.get('email');
    let cantidad = formData.get('cantidad');
    let fecha = formData.get('fecha');
    let hora = formData.get('hora');
    let clave = formData.get('validacion');

    if (clave != segurityCodeReserva) {
        mensajeReserva.innerHTML = "Ha ingresado incorrectamente el codigo de seguridad. Pruebe de vuelta.";
        mensajeReserva.classList.add("colorRED");
        codigoSeguridadReserva();
        inputClave.value = "";
    }
    else {
        mensajeReserva.innerHTML = "Sus datos se enviaron correctamente";
        mensajeReserva.classList.remove("colorRED");
        codigoSeguridadReserva();
        inputClave.value = "";
        almacenarDatos(nombre, email, cantidad, fecha, hora);
        cargarTablaDinamica(0);
    }
}
// Funcion para guardar los datos ingresados por el usuario en un arreglo de objetos
function almacenarDatos(nombre, email, cantidad, fecha, hora) {
    infoReserva[0] = {
        nombre: nombre,
        email: email,
        cantidad: cantidad,
        fecha: fecha,
        hora: hora
    };
}
// Funcion para cargar la tabla de reserva
function cargarTablaDinamica(i) {
    if(seEjecutoEjemplos === true) {
        for(let i = 0; i < 3; i++){
            let filas = document.querySelector(".fila-ejemplo").remove();
        }       
        seEjecutoEjemplos = false;
    }
    tabla.innerHTML += `
        <tr class="tabla-recerva-fila-${contadorTabla}">
            <td>${infoReserva[i].nombre}</td>
            <td>${infoReserva[i].email}</td>
            <td>${infoReserva[i].cantidad}</td>
            <td>${infoReserva[i].fecha}</td>
            <td>${infoReserva[i].hora}</td>
        </tr>`;
    tachado(contadorTabla);
    contadorTabla++;
}
// Funcion tachar filas
function tachado(contadorTabla) {
    if (contadorTabla > 0) {
        let ultimaFila = document.querySelector(".tabla-recerva-fila-" + contadorTabla);
        ultimaFila.classList.remove("tachado");
        let penultimafila = document.querySelector(".tabla-recerva-fila-" + (contadorTabla - 1));
        penultimafila.classList.add("tachado");
    }
}
// Funcion para limpiar tabla de recervas
function limpiarTabla() {
    tabla.innerHTML = "";
    contadorTabla = 0;
    seEjecutoEjemplos = false;
}
// Funcion para mostrar ejemplos en la tabla sin el tachado
function mostrarEjemplos(){
    if(seEjecutoEjemplos === false){
        for(let i = 1; i <= 3; i++){
            tabla.innerHTML += `
            <tr class="fila-ejemplo">
                <td>${infoReserva[i].nombre}</td>
                <td>${infoReserva[i].email}</td>
                <td>${infoReserva[i].cantidad}</td>
                <td>${infoReserva[i].fecha}</td>
                <td>${infoReserva[i].hora}</td>
            </tr>`; 
        }
        seEjecutoEjemplos = true;
    }
}
// Funcion para generar un codigo para el formulario newsletter
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
        inputClave.value = "";
    }
}

codigoSeguridadReserva();
codigoSeguridadNewsletter();
cargarTablaDinamica(0);