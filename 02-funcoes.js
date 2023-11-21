// 02-funcoes.js

/* Formas tradicionais */

/* Sintaxe anônima associada à variável/constate 

Obs.: cuidado com a ordem, já que nesta sintaxe
a função PRIMEIRO precisa ser declarada para
somente DEPOIS ser chamada/executada. */
const exemplo1 = function(){
    console.log("Função anônima!");
};

exemplo1();

/* Sintaxe declarada/nomeada 

Obs.: nesta sintaxe, você pode chamar a função
antes ou depois de declará-la. Portanto, a ordem
não importa. */
function exemplo2(){
    console.log("Função nomeada!");
}

exemplo2();


/* Exercícios
1) Crie uma função (qualquer sintaxe) que receba dois valores numéricos, calcule a diferença entre
eles e retorne o resultado.*/
function exercicio(valor1, valor2){
    /* Versão 1: variável de escopo LOCAL */
    // let resultado = valor1 - valor2;
    // return resultado;

    /* Versão 2 */
    return valor1 - valor2;
}

/*2) Chame esta função duas vezes passando valores
diferentes e guardando os resultados em variáveis de escopo global.*/
let resultado1 = exercicio(10, 5);
let resultado2 = exercicio(120, 66);
let resultado3 = exercicio(66, 120);

/*3) Mostre os valores processados pela função no terminal. */
console.log(resultado1);
console.log(resultado2);

// Garantindo que o resultado seja absoluto (positivo)
console.log( Math.abs(resultado3) );


