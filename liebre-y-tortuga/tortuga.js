export default class Tortuga{
    constructor(){
        this._posicion = 0;
    }

    get posicion(){
        return this._posicion;
    }

    correr(){
        let avance =  Math.floor(Math.random() * (100 - 1)) + 1;    
        if(avance <= 50) {
            this._posicion += 3;
        } else if (avance <= 70) {
            this._posicion -= 6;
        } else {
            this._posicion += 1;  
        }
    return this._posicion
    }

}