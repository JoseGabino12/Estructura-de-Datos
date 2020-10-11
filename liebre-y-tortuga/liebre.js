export default class Liebre{
    constructor(){
        this._posicion = 0;
    }

    get posicion(){
        return this._posicion;
    }

    correr(){
        let avance =  Math.floor(Math.random() * (100 - 1)) + 1;    
        if(avance <= 10) {
            this._posicion -= 12;
        }else if(avance <= 25){
            this._posicion -= 2;
        }else if (avance <= 45) {
            this._posicion += 0;
        } else if(avance <= 65){
            this._posicion += 9
        }else {
            this._posicion += 1;  
        }
    return this._posicion
    }
}