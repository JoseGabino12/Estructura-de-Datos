var vect = [];
var indice = 0;

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0) {
        vect[indice] = i;
        indice++;
    }
}


function busquedaBinaria(numero){
    let primero = 0;
    let ultimo = vect.length - 1;
    let busqueda = 0;
    let posicion = -1;
    let comparaciones = 0;
    while((busqueda === 0) && (primero <= ultimo)){
        let x = Math.floor((primero + ultimo)/2);

        if(vect[x] == numero){
            busqueda = 1;
            posicion = x;
        }else if(vect[x] > numero){
            ultimo = x - 1;
            comparaciones++
        } else{
            primero = x + 1;
            comparaciones++
        }
    }
    console.log(comparaciones);
    return posicion;
}

console.log(busquedaBinaria(50));

console.log(vect);