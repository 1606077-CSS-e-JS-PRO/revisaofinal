console.log("arquivo lista")

import "./style/style.scss"
import "./style/lista.scss"


document.getElementById("busca").addEventListener("keyup", function (event) {
    const valorBusca = event.target.value;
    buscarNaTabela(valorBusca);
})

executar()

function buscarNaTabela(valorBusca) {
    const linhas = document.getElementById("tabela_livros").tBodies[0].rows

    for (let index = 0; index < linhas.length; index++) {
        const linhaAtual = linhas[index]
        const textoLinha = linhaAtual.innerText
        const contemTexto = textoLinha.includes(valorBusca)

        if (contemTexto) {
            linhaAtual.style.display = "table-row"
        } else {
            linhaAtual.style.display = "none"
        }
    }
}

async function executar() {
    // 1 - Chamar API para trazer os livros
    const url = "https://target-api-simples.cyclic.app/livros"
    const response = await fetch(url)
    const livros = await response.json()

    // 2 - Jogar esses livros em tela
    const tbody = document.getElementById("tabela_livros").tBodies[0]

    livros.forEach(livroAtual => {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${livroAtual.id}</td>
            <td>${livroAtual.title}</td>
            <td>${livroAtual.description}</td>
        `;
        tbody.appendChild(novaLinha);
    });
}