let infoProductos = {
    "producto": ["Cafe","Te","Postre"],
    "precios": [2.50, 1, 3]
}
let formProducto = document.querySelector("#form-select-product");
let btnAgregar = document.querySelector("#btn-agregar");
let tabProducts = document.querySelector("#tab-productos");

formProducto.addEventListener("submit", agregar);

function agregar(e){
    e.preventDefault();
    let formData = new FormData(formProducto);
    let posPrecio = document.querySelector("#list-productos").value;

    let posProducto = formData.get('producto');
    let cantidad = formData.get('cantidad');
    let precio = analizarPrecioProducto(cantidad, posPrecio);

    tabProducts.innerHTML += `
        <tr>
            <td>${infoProductos.producto[posProducto]}</td>
            <td>${cantidad}</td>
            <td>$${precio}</td>
        </tr>`;
}
function analizarPrecioProducto(cantidad, posPrecio){
    let precio = 0;
    if(cantidad > 1){
        precio = (infoProductos.precios[posPrecio]) * cantidad;
    }
    else{
        precio = infoProductos.precios[posPrecio];
    }
    return precio;
}
