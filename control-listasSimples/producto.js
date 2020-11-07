export default class Producto{
    constructor(codigo, nombre, descripcion, cantidad, costo){
        this.codigo = codigo
        this.nombre = nombre
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
    }

    getTotal(){
        let total = 0;
        total = this.cantidad * this.costo;
        return total;
    }
}