import Tortuga from  './tortuga.js'
import Liebre from  './liebre.js'

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
