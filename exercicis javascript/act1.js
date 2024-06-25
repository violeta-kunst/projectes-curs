const array = [1,2,3,4,5,6,13,7,8,9,10,11,12];
function mayor(array) {
    let aux = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > aux) {
            console.log(aux + " es mas pequeño que " +  array[i]);
            aux = array[i];
            
        }
        console.log(aux + " es el numero mas grande demomento");
    }
    return aux;
}

console.log(mayor(array));
console.log(Math.max(...array));