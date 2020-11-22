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
            this.inicio.anterior = newProduct;
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
            newProduct.anterior = aux;
            return;
        }
    }

    agregarProductoPosicion(nuevoProducto, posicion) {
        let aux = this.inicio;
        let aux2 = 0;

        if( (aux == null) && (posicion == 1)){
            this.inicio = nuevoProducto;
            return this.inicio;
        }else if(posicion == 1){
            nuevoProducto.siguiente = this.inicio;
            this.inicio.anterior = nuevoProducto;
            this.inicio = nuevoProducto;
            return this.inicio;
        }
        else{
            for(let i = 0; i <= posicion - 1; i++) {
        //         if(aux == null){
        //             aux2.siguiente = aux;
        //             aux = nuevoProducto;
        //             nuevoProducto.anterior = aux2;
        //             return this.inicio;
        //         }else{   
                    aux2 = aux;
                    aux = aux.siguiente;
        //         }
            }
            return aux2;
            
        //         nuevoProducto.siguiente = aux;
        //         aux2.siguiente = nuevoProducto;
        //         nuevoProducto.anterior = aux2;
        //         return this.inicio;
        }
    }


    deleteProduct(codigo) {
        let elementoBorrado;

        if(this.inicio === null){
            alert("No hay productos");
            return;
        }else if(this.inicio.codigo === codigo) {
            elementoBorrado = this.inicio;
            this.inicio = this.inicio.siguiente
            return elementoBorrado;
        } else {
            let aux = this.inicio;
            let cont = 1;
            for(let i = 0; i < cont; i++){
                if(aux.siguiente == null){
                    alert("No se encontro el producto");
                    return;
                }else if(aux.siguiente.codigo == codigo){
                    elementoBorrado = aux.siguiente;
                    aux.siguiente = aux.siguiente.siguiente;
                    return elementoBorrado;
                }else{
                    aux = aux.siguiente;
                    cont++;
                }
            }
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
            this.inicio = this.inicio.siguiente
    
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
        let auxEnd = 0;
        while(aux != null){ 
            auxEnd = aux;
            aux = aux.siguiente;
        }
        auxEnd.siguiente = this.inicio

        return auxEnd;
    }
}