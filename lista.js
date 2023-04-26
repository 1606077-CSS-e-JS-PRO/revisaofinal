console.log("arquivo lista")

import "./style/style.scss"
import "./style/lista.scss"

executar()

async function executar(){

    // 1 - Chamar API para trazer os livros
    const url = "https://target-api-simples.cyclic.app/livros"
    const response = await fetch(url)
    const livros = await response.json()

    // 2 - Jogar esses livros em tela
    const valorBusca = document.getElementById("busca").value

    const tabela = document.getElementById("tabela_livros")

    const body = tabela.tBodies[0]

    livros.forEach(livro => {
        const novaLinha = tabela.tBodies[0].insertRow(0)
        const tdId = novaLinha.insertCell(0)
        const tdTitle = novaLinha.insertCell(1)
        const tdDescription = novaLinha.insertCell(2)
        tdId.innerHTML = livro.id
        tdTitle.innerHTML = livro.title
        tdDescription.innerHTML = livro.description
    });
}