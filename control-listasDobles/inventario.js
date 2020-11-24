export default class Inventario {
    constructor() {
        this.inicio = null;
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
            newProduct.anterior = aux;
            return;
        }
    }



    deleteProduct(codigo) {
        let elementoBorrado;
        let aux = this.inicio;
        if(this.inicio === null){
            alert("No hay productos");
            return;
        }else if(this.inicio.codigo === codigo) {
            elementoBorrado = this.inicio;
            this.inicio = this.inicio.siguiente;
            this.inicio.anterior = null;
            return elementoBorrado;
        }else{
            while(aux.codigo != codigo) {
                aux = aux.siguiente;
            }
    
            aux.anterior.siguiente = aux.siguiente;
            aux.siguiente.anterior = aux.anterior;
            aux.siguiente = null;
            aux.anterior = null;
            elementoBorrado = aux;
            return elementoBorrado;
        }

    }

    deleteFirstProduct() {
        let productoEliminado;

        if(this.inicio == null){
            alert("No hay productos");
        }else if(this.inicio.siguiente === null) {
            productoEliminado = this.inicio;
            this.inicio = null

            return productoEliminado;
        } else {
            productoEliminado = this.inicio;
            this.inicio = this.inicio.siguiente;
            this.inicio.anterior = null;
            return productoEliminado;
        }
    }


    searchProduct(codigo) {
        let aux = this.inicio;
        let cont = 1;
        for(let i = 0; i < cont; i++){
            if(aux == null){
                alert("No se encontro el producto");
                return;
            }else if(aux.codigo == codigo){
                return aux;
            }else{
                aux = aux.siguiente;
                cont++;
            }
        }
        
    }

    listInvert(){
        let aux = this.inicio;
        let listaInversa = Array();
        let i = 0;
        while(aux.siguiente !== null) {
            listaInversa[i] = aux;
            aux = aux.siguiente;
            i++;
        }
        // for(let index = listaInversa.length - 1; index !=-1 ; index--)
        // {
        //     console.log(listaInversa[i]);
        // }
        console.log(listaInversa);
    }
}