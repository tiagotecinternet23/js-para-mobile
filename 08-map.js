import cursos from "./modulos/cursos.js";

/* map (mapear, mapeia - transformar em outra coisa) 
Passa por elementos de um array e realiza operações em cada um deles através de uma função (callback), gerando um novo array. */

// Exemplo 1
const numeros = [10, 20, 5, 12, 66, 50];
console.log(numeros);

const numerosDobrados = numeros.map( numero => numero * 2 );
console.log(numerosDobrados);

console.log("-----------");

console.log(cursos);

// Exemplo 2: gerar um novo array apenas com os nomes dos cursos
const titulos = cursos.map( curso => curso.titulo );
console.log(titulos);

/* Exercício 
Use o map para gerar um novo array APENAS com os preços
calculados com um desconto de 10%.

Como calcular?
-Opção 1: valor - valor * 0.10
-Opção 2: valor * 0.9               

E mostre no console.  */
const precosBlackFriday = cursos.map( 
    curso => curso.preco - curso.preco * 0.1 
);

console.log(precosBlackFriday);

/* DESAFIO!
Gere um novo array de cursos contendo todos os dados anteriores e os preços novos com desconto. */
const cursosBlackFriday = cursos.map( curso => {
    return { ...curso, preco: curso.preco - curso.preco * 0.10 }
} );

console.log(cursosBlackFriday);

