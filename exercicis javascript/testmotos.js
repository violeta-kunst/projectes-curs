/*
● La moto más cara y más barata.
● ¿Cuántas motos hay con menos de 30.000 km de la marca HONDA?
● ¿Cuántas motos hay con menos de 30.000 km de más de 240cc?
● ¿Qué moto tiene menos de 25.000 km, más de 350cc de cilindrada y cuesta entre 1.800 y 2.200 eur?
● Una lista de marcas distintas con el número de motos de cada una
*/

const motos = require('./motos.json');

for (let i = 0; i < motos.length; i++) {
    console.log(motos[i].eur);
}

function ordenarPrecio(moto1, moto2) {
    if (moto1.eur > moto2.eur) {
        return -1;
    }
    if (moto1.eur < moto2.eur) {
        return 1;
    } 
    return 0;
}

motos.sort(ordenarPrecio);
motos.forEach(moto => console.log(moto.eur));

let motoshonda = motos.filter (moto=> moto.marca === 'HONDA'&& moto.km<3000);
console.log(motoshonda.length);