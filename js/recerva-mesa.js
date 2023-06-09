"use strict"

const MAX = 10000;
const MIN = 1000;

let mensaje = document.querySelector("#mensajeDeSeguridad-reserva");
let captcha = document.querySelector("#captcha-reserva");
let form = document.querySelector("#form-reserva");
let tabla = document.querySelector("#tabla-recerva");
let btnEjemplo = document.querySelector("#btn-ej").addEventListener("click", function () { cargarTablaDinamica(1) });
let btnlimpiar = document.querySelector("#btn-limpiar").addEventListener("click", limpiarTabla);
let segurityCode;
let contadorTabla = 0;

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
    }
];

form.addEventListener("submit", validar);
codigoSeguridad();
cargarTablaDinamica(0);

//funcion para generar un nro entre 1000 y 9999
function codigoSeguridad() {
    segurityCode = Math.floor((Math.random() * (MAX - MIN) + MIN));
    captcha.innerHTML = segurityCode;
}
//Funcion para validar lo ingresado por el usuario
function validar(e) {
    e.preventDefault();
    let inputClave = document.querySelector("#clave-reserva");
    let formData = new FormData(form);

    let nombre = formData.get('nombre');
    let email = formData.get('email');
    let cantidad = formData.get('cantidad');
    let fecha = formData.get('fecha');
    let hora = formData.get('hora');
    let clave = formData.get('validacion');

    if (clave != segurityCode) {
        mensaje.innerHTML = "Ha ingresado incorrectamente el codigo de seguridad. Pruebe de vuelta.";
        mensaje.classList.add("colorRED");
        codigoSeguridad();
        inputClave.value = "";
    }
    else {
        mensaje.innerHTML = "Sus datos se enviaron correctamente";
        mensaje.classList.remove("colorRED");
        codigoSeguridad();
        inputClave.value = "";
        almacenarDatos(nombre, email, cantidad, fecha, hora);
        cargarTablaDinamica(2);
    }
}
//funcion para guardar los datos ingresados por el usuario en un arreglo de objetos
function almacenarDatos(nombre, email, cantidad, fecha, hora) {
    infoReserva[2] = {
        nombre: nombre,
        email: email,
        cantidad: cantidad,
        fecha: fecha,
        hora: hora
    };
}
//Funcion para cargar la tabla de reserva
function cargarTablaDinamica(i) {
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
//Funcion tachar filas
function tachado(contadorTabla) {
    if (contadorTabla > 0) {
        let ultimaFila = document.querySelector(".tabla-recerva-fila-" + contadorTabla);
        ultimaFila.classList.remove("tachado");
        let penultimafila = document.querySelector(".tabla-recerva-fila-" + (contadorTabla - 1));
        penultimafila.classList.add("tachado");
    }
}
//Funcion para limpiar tabla de recervas
function limpiarTabla() {
    tabla.innerHTML = "";
    contadorTabla = 0;
}