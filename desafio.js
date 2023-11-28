const botao = document.querySelector("#carregar");
const divUsuarios = document.querySelector("#lista-de-usuarios");

botao.addEventListener("click", async function(){
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!resposta.ok){
            throw new Error(resposta.status);
        }
        const dados = await resposta.json();
        
        if(divUsuarios.innerHTML == ""){
            dados
                .filter( ({name}) => name.startsWith("C") )
                .map( ({name, email, website}) => {
                    let secao = document.createElement("section");
                    secao.innerHTML = `
                        <h2>${name}</h2>
                        <p>${email}</p>
                        <p>${website}</p>
                        <hr>
                    `;
                    divUsuarios.appendChild(secao);
            } );            
        }

    } catch (error) {
        console.error(error.message);
    }
});