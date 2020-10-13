class Corredor{
    constructor(){
        this.posicion = 0;
    }
}

class Liebre extends Corredor{
    constructor(posicion){
        super({posicion})
    }


    correr(){ 
        let avance = Math.ceil(Math.random() * 100);

        if(avance <= 10) {
            this.posicion -= 12;
        }else if(avance <= 25){
            this.posicion -= 2;
        }else if (avance <= 45) {
            this.posicion += 0;
        } else if(avance <= 65){
            this.posicion += 9
        }else {
            this.posicion += 1;  
        }
    return this.posicion
    }
}

class Tortuga extends Corredor{
    constructor(posicion){
        super({posicion})
    }

    correr(){  
        let avance = Math.ceil(Math.random() * 100);
        if(avance <= 20) {
            this.posicion -= 6;
        } else if (avance <= 50) {
            this.posicion += 3;
        } else if(avance <= 100){
            this.posicion += 1;  
        }
    return this.posicion
    }

}

class Carrera{
    constructor(){}

    iniciarCarrera(c1, c2){
        while( (c1.posicion < 90) && (c2.posicion < 90) ){
            c1.correr();
            c2.correr();
            
            console.log(`La tortuga va en: ${c1.posicion}, la liebre va en: ${c2.posicion}`)
        }
        
        if((c1.posicion >= 90) && (c2.posicion >= 90)){
            console.log(`Esto ha sido un empate!!`);
        }else if(c1.posicion >= 90){
            console.log(`La tortuga ha ganado!!`);
        }else{
            console.log(`La liebre ha ganado!!`)
        }  
    }

}


let c1 = new Tortuga();
let c2 = new Liebre();

let app = new Carrera();
app.iniciarCarrera(c1, c2);



