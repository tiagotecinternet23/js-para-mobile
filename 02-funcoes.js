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


