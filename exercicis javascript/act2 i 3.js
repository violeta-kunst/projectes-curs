function calcular (a,b){
    let suma = a + b;
    let resta = a - b;
    let producto = a * b;
    let division = a / b;

    console.log(`Resultados:`);
    console.log(`${a} + ${b} = ${suma}`);
    console.log(`${a} - ${b} = ${resta}`);
    console.log(`${a} * ${b} = ${producto}`);
    console.log(`${a} / ${b} = ${division}`);
}
    calcular (6,3)
    
/*Entrada
calcula(a,b)

Proceso
calcular la suma, resta, producto y división de ambos números
guardar los resultados en variables y mostrar en terminal

Salida
Resultados:
X + Y = S
X - Y = R
X * Y = P
X / Y = D
*/

3
function calcularPorcentaje(parte, total) {
    if (total === 0) {
      return 0; 
    }
    return (parte / total) * 100;
  }

  function calcularPorcentajeDeAndroids() {

    let numAndroids = parseInt(promt('Give me a number'));
    let numIphones = parseInt(promt('Give me a number'));

    let totalDispositivos = numAndroids + numIphones;
  
    let porcentajeAndroids = calcularPorcentaje(numAndroids, totalDispositivos);
  

    console.log(`El porcentaje de dispositivos Android es ${porcentajeAndroids.toFixed(2)}%`);
      alert(`El porcentaje de dispositivos Android es ${porcentajeAndroids.toFixed(2)}%`);3

  calcularPorcentajeDeAndroids(5,6);

  }
  
/*
Entrada
xx(android, iphone)

Proceso
Entrar el número de androids y iphones de la clase. Mostrar el porcentaje de androids.

Salida
El porcentaje de androids es X%
*/


