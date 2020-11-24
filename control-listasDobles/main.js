import Inventario from './inventario.js';
import Producto from './productos.js';

const inventario = new Inventario();


const btnAddProductEnd = document.querySelector('#addEnd');
const btnDelete = document.querySelector('#delete');
const btnDeleteFirst = document.querySelector('#deleteFirst');
const searchForm = document.querySelector('#search-form');
const btnShowProduct = document.querySelector('#showProduct')
const btnShowProductInver = document.querySelector('#showProductInvers')

btnAddProductEnd.addEventListener('click', agregarProductoFinal);
btnDeleteFirst.addEventListener('click', borrarPrimerProducto);
btnDelete.addEventListener('click', borrarArticulo);
searchForm.addEventListener('submit', buscarProducto);
btnShowProduct.addEventListener('click', listarProductos);
btnShowProductInver.addEventListener('click', listarProductosInvertido);


function validarDatos() {

    const codigo = document.querySelector('#codigo').value
    const nombre = document.querySelector('#nombre').value
    const descripcion = document.querySelector('#descripcion').value
    const cantidad = Number(document.querySelector('#cantidad').value)
    const costo = Number(document.querySelector('#costo').value)


    if(codigo === '' || nombre === '' || descripcion === '' || cantidad === '' || costo === '') {
        alert('todos los espacios deben estar llenos');
    } else if( isNaN(cantidad) || cantidad <= 0 ) {
        alert('Revise que se hayan llenado todos los espacios correctamente');
    } else if( isNaN(costo) || costo <=0){
        alert('Revise que se hayan llenado todos los espacios correctamente');
    } else {
        const producto = new Producto(codigo, nombre, descripcion, cantidad, costo);

        return producto
    }
}


function agregarProductoFinal() {
    let producto = validarDatos();

    inventario.addProduct(producto);
    alert('El articulo se ha agregado correctamente al inventario.');
    console.log(inventario);
}

function borrarPrimerProducto() {
    let productoEliminado = inventario.deleteFirstProduct();
    console.log(productoEliminado);
}

function borrarArticulo() {
    const articulo = document.getElementById('codigoBorrar').value;
    console.log(inventario.deleteProduct(articulo));
}

function buscarProducto(e) {
    e.preventDefault();

    const articulo = Number(document.getElementById('codigoBuscar').value);
    console.log(inventario.searchProduct(articulo));
}

function listarProductosInvertido() {
   inventario.listInvert();
}

function listarProductos() {
    console.log(inventario);
}