class Numero{
    constructor(numero){
        this.numero = numero;
    }

    comprobar(){
        if( (this.numero % 2) == 0){
            let j = (this.numero /2)
            for(let j = (i / 2); j >= 1 ; j--){
                if((this.numero%j) ==  0){
                    console.log(`Es numero perfecto.`)
                }else{
                    console.log(`No es perfecto.`)
                }
            }
        }
        
    }
}

let app = new Numero(10);
app.comprobar();