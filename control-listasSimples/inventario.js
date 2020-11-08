export default class Inventario {
    constructor() {
        this.inicio = null;
    }

    addProductStart(newProduct) {

        console.log(newProduct);
        if(this.inicio === null) {
            this.inicio = newProduct
        } else {
            newProduct.siguiente = this.inicio;
            this.inicio = newProduct;
        }
    }
    
    addProduct(newProduct) {

        if(this.inicio === null) {
            this.inicio = newProduct

            return;
        } else {
            let aux = this.inicio;

            while(aux.siguiente !== null) {
                aux = aux.siguiente;
            }

            aux.siguiente = newProduct;
            return;
        }
    }

    //Corregirle
    agregarProductoPosicion(nuevoProducto, posicion) {
        let aux = this.inicio
        let aux2 = 0;
        // console.log(aux)

        for(let i = 1; i <= posicion; i++) {
            aux2 = aux;
            aux = aux.siguiente;
        }

        nuevoProducto.siguiente = aux;
        aux2.siguiente = nuevoProducto;

        // nuevoProducto.siguiente = aux.siguiente;
        // while(aux.siguiente) {
        //     console.log(aux);

        //     aux = aux.siguiente;
        // }
    }


    deleteProduct(codigo) {
        let elementoBorrado;

        if(this.inicio.codigo === codigo) {
            this.inicio = this.inicio.siguiente
        } else {
            let aux = this.inicio;

            while(aux.siguiente.codigo !== codigo) {
                aux = aux.siguiente;
            }
            elementoBorrado = aux.siguiente;
            aux.siguiente = aux.siguiente.siguiente
        }

        return elementoBorrado;
    }

    deleteFirstProduct() {
        let productoEliminado;

        if(this.inicio.siguiente === null) {
            productoEliminado = this.inicio;
            this.inicio = null

            return productoEliminado;
        } else {
            productoEliminado = this.inicio;
            this.inicio = this.inicio.siguiente
    
            return productoEliminado;
        }
    }


    searchProduct(codigo) {
        let aux = this.inicio;

        while(aux.codigo !== codigo) {
            aux = aux.siguiente;
        }

        return aux
    }
}