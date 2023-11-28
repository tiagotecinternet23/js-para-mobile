// 11-promises-com-fetch.js

/* Comunicação assíncrona (AJAX) para 
carregamento de dados usando fetch/then/catch */

const apiUrl = `https://jsonplaceholder.typicode.com/users/3`;

function acessaAPI() {

    // Conecte/Acesse...
    fetch(apiUrl)

        // ... e então capture a resposta da API no formato JSON
        .then(resposta => {

            /* Se a resposta da requisição não for bem-sucedida
            (por exemplo, se não houver registros, ou se der erro 
            no próprio server [500]) */
            if (!resposta.ok) {
                throw new Error(
                    `Erro na requisição: ${resposta.status} - ${resposta.statusText}`)
            }

            return resposta.json();
        })

        // ... e então capture os dados contidos na resposta
        .then(dados => console.log(dados))

        // Em caso de erro (acesso, no json, gerais) capture o erro
        .catch(error => {
            console.error("Erro na operação: " + error.message)
        })

}

acessaAPI();