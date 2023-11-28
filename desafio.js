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
            for(const usuario of dados){
                let secao = document.createElement("section");
                secao.innerHTML = `
                    <h2>${usuario.name}</h2>
                    <p>${usuario.email}</p>
                    <p>${usuario.website}</p>
                    <hr>
                `;
                divUsuarios.appendChild(secao);
            }
        }

    } catch (error) {
        console.error(error.message);
    }
});