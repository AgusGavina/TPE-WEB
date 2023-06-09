// Datos de productos
"use strict";

const productos = [
    {
        nombre: "Café Espresso",
        descripcion: "Un café intenso y concentrado con crema espesa.",
        precio: 2.5,
    },
    {
        nombre: "Latte Macchiato",
        descripcion:
            "Leche caliente con una capa de café expreso y espuma de leche.",
        precio: 3.5,
    },
    {
        nombre: "Cappuccino",
        descripcion:
            "Café con una mezcla perfecta de espresso, leche y espuma de leche.",
        precio: 3,
    },
    {
        nombre: "Mocha",
        descripcion: "Café con chocolate, leche vaporizada y crema batida.",
        precio: 4,
    },
    {
        nombre: "Café Americano",
        descripcion: "Café suave y equilibrado con más agua que el espresso.",
        precio: 2,
    },
    {
        nombre: "Tarta de Manzana",
        descripcion: "Deliciosa tarta hecha con manzanas frescas y masa crujiente.",
        precio: 4.5,
    },
    {
        nombre: "Brownie",
        descripcion: "Pastel de chocolate denso y jugoso con trozos de nueces.",
        precio: 3.5,
    },
    {
        nombre: "Cheesecake",
        descripcion: "Tarta de queso suave y cremosa con base de galleta.",
        precio: 4,
    },
    {
        nombre: "Croissant",
        descripcion: "Clásico croissant francés con hojaldre y mantequilla.",
        precio: 2,
    },
    {
        nombre: "Galletas de Chocolate 	",
        descripcion: "Galletas caseras de chocolate crujientes y deliciosas.",
        precio: 1.5,
    },
    {
        nombre: "Té Verde",
        descripcion:
            "Té ligero y refrescante con numerosos beneficios para la salud.",
        precio: 2.5,
    },
    {
        nombre: "Té de Manzanilla",
        descripcion: "Infusión calmante de flores de manzanilla.",
        precio: 2,
    },
    {
        nombre: "Té de Frutos Rojos",
        descripcion: "Mezcla de sabores afrutados y vibrantes.",
        precio: 3,
    },
    {
        nombre: "Chai Latte",
        descripcion: "Té negro especiado con leche caliente y espuma de leche.",
        precio: 3.5,
    },
    {
        nombre: "Té de Hierbabuena 	",
        descripcion: "Té de menta fresca y aromática.",
        precio: 2.5,
    },
];

const tablaPresupuesto = document.querySelector("#tablaPresupuesto");
const tablaProductos = document.querySelector("#tablaProductos");
const botonBorrarTodoPresupuesto = document.querySelector("#btn-eliminar-todo").addEventListener("click", eliminarTodoDelPresupuesto);
const botonGenerarPresupuestoAleatorio = document.querySelector("#btn-pres-alet").addEventListener("click", generarProductosAleatorios);
let precioTotal = document.querySelector("#total-price");
let cuenta = 0;

// Bucle for para cargar la tabla de productos
for (let i = 0; i < productos.length; i++) {
    agregarFilaProducto(i);
}
// Bucle for para agregar addEventLister al boton Agregar
let arregloBotonesAgregar = document.querySelectorAll("#btn-agregar-prod");
for(let i = 0; i < arregloBotonesAgregar.length; i++){
    let btnAgregar = arregloBotonesAgregar[i];
    btnAgregar.addEventListener('click', () => {
        let valor = btnAgregar.value;
        agregarAlPresupuesto(valor);
    });
}
// Función para agregar filas de productos a la tabla productos
function agregarFilaProducto(i) {
    tablaProductos.innerHTML += `
        <tr>
            <td>${productos[i].nombre}</td>
            <td>${productos[i].descripcion}</td>
            <td>$${productos[i].precio}</td>
            <td><button id="btn-agregar-prod" value="${i}">Agregar</button></td>
        </tr>`;
}
// Función del boton agregar
function agregarAlPresupuesto(i) {
    tablaPresupuesto.innerHTML += `
        <tr id="elemento-presupuesto-${i}">
            <td>${productos[i].nombre}</td>
            <td>$${productos[i].precio}</td>
            <td><button onclick="eliminarDelPresupuesto(${i})">Eliminar</button></td>
        </tr>`;
    cuenta += productos[i].precio;
    precioTotal.innerHTML = cuenta;
}
// Función del boton eliminar
function eliminarDelPresupuesto(i) {
    let eliminarFilaPresupuesto = document.querySelector("#elemento-presupuesto-" + i).remove();
    cuenta -= productos[i].precio;
    precioTotal.innerHTML = cuenta;
}
// Función del boton eliminar todo
function eliminarTodoDelPresupuesto() {
    tablaPresupuesto.innerHTML = "";
    cuenta = 0;
    precioTotal.innerHTML = cuenta;
}
// Función para precargar la tabla presupuesto
function precargarTablaPresupuesto() {
    let i = 0;
    tablaPresupuesto.innerHTML += `
        <tr id="elemento-presupuesto-${i}">
            <td>${productos[i].nombre}</td>
            <td>$${productos[i].precio}</td>
            <td><button onclick="eliminarDelPresupuesto(${i})">Eliminar</button></td>
        </tr>`;
    cuenta += productos[i].precio;
    precioTotal.innerHTML = cuenta;
}
// Función generar 3 items aleatorios
function generarProductosAleatorios() {
    eliminarTodoDelPresupuesto();
    for (let i = 0; i < 3; i++) {
        let posAleatoria = Math.floor(Math.random() * productos.length);
        tablaPresupuesto.innerHTML += `
                <tr id="elemento-presupuesto-${posAleatoria}">
                    <td>${productos[posAleatoria].nombre}</td>
                    <td>$${productos[posAleatoria].precio}</td>
                    <td><button onclick="eliminarDelPresupuesto(${posAleatoria})">Eliminar</button></td>
                </tr>`;
        cuenta += productos[posAleatoria].precio;
        precioTotal.innerHTML = cuenta;
    }
}

precargarTablaPresupuesto();