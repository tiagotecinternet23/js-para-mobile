// 04-codigo-modular.js

/* Podemos usar "alias/apelidos" com o comando "as"
para evitar conflitos entre módulos de mesmo nome */

import { pessoa, livro, alunos as reprovados } from "./modulos/dados.js";
import alunos from "./modulos/alunos.js";

import { 
    converteMaiusculas, 
    converteMinusculas,
    formataMoeda
} from "./modulos/funcoes.js";


console.log(reprovados); // usando o módulo alunos através de apelido
console.log("-------");
console.log(alunos); // usando o nome original do módulo
console.log("-------");

console.log(pessoa);
console.log(pessoa.nome);

for( const prop in pessoa ){
    console.log(pessoa[prop]);
}

console.log(livro.titulo);
console.log(livro.volume);


console.log( converteMaiusculas(reprovados[0]) );
console.log( converteMinusculas(alunos[0]) );

let preco1 = 1200.88;
let preco2 = 1000000.75;
let preco3 = 500.8452;

console.log( formataMoeda(preco1) );
console.log( formataMoeda(preco2) );
console.log( formataMoeda(preco3) );

