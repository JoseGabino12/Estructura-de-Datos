function llenar(vector){
    let indice = 0;
    for(let i = 2; i <= 20; i++){

        if( i % 2 == 0 ){
            vector[indice] = i; 
            indice++;
        }
    }
}

function mostrar(){
    console.log(vector);
}

function girarDerecha(){
    this.vector.splice(0, 0 , this.vector[this.vector.length - 1] )
    this.vector.splice(10, 1)

}

function girarIzquierda(){
    this.vector.splice(10, 0, this.vector[0])    
    this.vector.splice(0, 1)
}

function invertir(){
    let c = this.vector.length - 1
    for ( let i = 0; i < Math.round(this.vector.length/2); i++){
    let respaldo = this.vector[i]
    this.vector[i] = this.vector[c]
    this.vector[c] = respaldo
    c--
    }
}

var vector = [];
llenar(vector);
girarDerecha();
girarDerecha();
girarIzquierda();
invertir();
mostrar();