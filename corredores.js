class Corredor{
    constructor(nombre,numero){
        this.nombre = nombre;
        this.numero = numero;
        this.posicion = 0;
    }

    correr(){
            let avance =  Math.floor(Math.random() * (6 - 1)) + 1
            if((avance == 1)){
                this.posicion += 3;
            }else if((avance == 2) || (avance == 3)){
                this.posicion += 1;
            }else if((avance == 4) || (avance == 5) || (avance == 6)){
                this.posicion += 2;
            }
        return this.posicion
    }
}

class Carrera{
    constructor(){}

    iniciarCarrera(c1, c2){
        while( (c1.posicion < 100) && (c2.posicion < 100) ){
            c1.correr();
            c2.correr();
            console.log(`El corredor ${c1.numero} va en: ${c1.posicion}, el corredor ${c2.numero} va en: ${c2.posicion}`)
        }

        if((c1.posicion >= 100) && (c2.posicion >= 100)){
            console.log(`Esto ha sido un empate!!`);
        }else if(c1.posicion >= 100){
            console.log(`El corredor numero ${c1.numero} ha ganado!!`);
        }else{
            console.log(`El corredor numero ${c2.numero} ha ganado!!`)
        }
    }


}


let c1 = new Corredor("Manuel Gonzalo", 10);
let c2 = new Corredor("André Nemesis", 20);

let app = new Carrera();
app.iniciarCarrera(c1, c2);

