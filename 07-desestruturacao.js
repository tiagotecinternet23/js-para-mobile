// 07-desestruturacao.js

/* Destructuring ou Desestruturação
Extrair os dados de arrays e objetos para variáveis/constantes
individuais */

// Destructuring em arrays
const alunas = ["Tanaka", "Zimbo", "Melissa"];
const [tanaka, zimbo, melissa] = alunas;

console.log(tanaka);
console.log(zimbo);
console.log(melissa);

const unidades = ["Penha", "Tatuapé", "Itaquera", "São Miguel"];

                    // pulando Itaquera
const [penha, tatuape, , smp] = unidades;

console.log("-------");

console.log(penha);
console.log(tatuape);
console.log(smp);

console.log("-------");

const [tesla, einstein, newton] = ["Tesla", "Einstein", "Newton"];

console.log(tesla);
console.log(einstein);
console.log(newton);

console.log("-------");

const recursos = [
    ["Notebook", "TV Led", "Computador Desktop"],
    texto => texto.toUpperCase()
];

console.log(recursos); // Array completo

// Destructuring
const [produtos, converter] = recursos;

// Acessando através da constante que foi gerada pelo destructuring
console.log(produtos[1]); // TV Led

for(const produto of produtos) {
    console.log("Produto: "+produto);
}

console.log( converter("tiago") );
console.log( converter("gelADEira") );
console.log( converter(produtos[0]) );