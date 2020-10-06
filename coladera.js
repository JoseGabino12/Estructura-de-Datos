var numeros = [];
var nPrimos = [];

for(let i = 0; i < 1000; i++ ){
    numeros[i] = 1;
}

for(var i = 2; i < numeros.length; i++){
        for (var j = i * i; j < numeros.length; j += i) {
            numeros[j] = 0;
        }
}

let indice = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros.findIndex(indice => indice == 1) == i){
        nPrimos[indice++] = i;
        numeros[i] = 0;
    }
}

console.log(nPrimos)


