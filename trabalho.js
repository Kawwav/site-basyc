let avaliacoes = [];


window.onload= function(){

const  avaliacaosalvas=JSON.parse(sessionStorage.getItem("avaliacoes"));
if (avaliacaosalvas){

avaliacoes=avaliacaosalvas;

exibiravaliacoes();

}
}




function adicionaravaliacao(event) {
    event.preventDefault();

    const nomeinput = document.getElementById("name");
    const emailinput = document.getElementById("email");
    const telefoneinput = document.getElementById("telefone");
    const notainput = document.getElementById("nota");


    const nome = nomeinput.value.trim();
    const email = emailinput.value.trim();
    const telefone = telefoneinput.value.trim();
    const nota = notainput.value.trim();


    if (nome !== "" && email !== "" && telefone !== "" && nota !== "") {
        const novaavaliacao = { nome, email, telefone, nota };
        avaliacoes.push(novaavaliacao);

    sessionStorage.setItem("avaliacoes",JSON.stringify(avaliacoes))

        exibiravaliacoes();
        limparinputs();
    }

    return false;
}



function exibiravaliacoes() {

    const avaliacaolist = document.getElementById("avaliacaolist");
    avaliacaolist.innerHTML = "";

    avaliacoes.forEach(avaliacao => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p><strong>nome:</strong> ${avaliacao.nome}</p>

            <p><strong>email:</strong> ${avaliacao.email}</p>

            <p><strong>telefone:</strong> ${avaliacao.telefone}</p>

            <p><strong>nota:</strong> ${avaliacao.nota}</p>

            <hr>
        `;
        avaliacaolist.appendChild(div);
    });
}

function adicionarcarrinho() {
    alert("Adicionado ao carrinho");
}

function limparinputs() {

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("telefone").value = "";

    document.getElementById("nota").value = "";
}