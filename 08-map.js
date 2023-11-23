// 08-map.js

/* map (mapear, mapeia - transformar em outra coisa) 
Passa por elementos de um array e realiza operações em cada um deles através de uma função, gerando um novo array. */

// Exemplo 1
const numeros = [10, 20, 5, 12, 66, 50];
console.log(numeros);

const numerosDobrados = numeros.map( numero => numero * 2 );
console.log(numerosDobrados);

