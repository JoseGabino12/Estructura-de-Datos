class Dado{
    constructor(){

    }

    lanzar(){
    return Math.ceil(Math.random() * 6);
    }
}


class Jugador{  
    constructor(nombre){
        this.nombre = nombre
        this.posicion = 0
        this.avance = 0
    }

    avanzar(numero){
        this.avance = numero + this.posicion;
        return this.avance; 
    }
}

class Tablero {
    vCasilla(numero) {

        switch (numero) {
            case 4: // Escaleras
                return 9;
            case 23: 
                return 50;
            case 23: 
                return 25;
            case 60: 
                return 37;
            case 40: 
                return 49;
            case 58: 
                return 4;
            case 66: 
                return 2;
            case 71: 
                return 5;
            case 9: 
                return 13;
            case 29: 
                return 25;
            case 76: //Serpientes
                return 64;
            case 99: 
                return 40;
            case 61: 
                return 48;
            case 50: 
                return 13;
            case 70: 
                return 22;
            case 85: 
                return 19;
            case 90: 
                return 10;
            case 21: 
                return 6;
            case 11: 
                return 5;
            default:
                return numero
        }
    }
}

let dado = new Dado();
let tablero = new Tablero();
let jugador1 = new Jugador('Gabino');
let jugador2 = new Jugador('Laura');

