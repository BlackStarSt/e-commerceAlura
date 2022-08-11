import { produtoServices } from "../service/produtos-servicos.js";

const form = document.querySelector('[data-form]');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const url = document.querySelector('[data-url]').value;
    const categoria = document.querySelector('[data-categoria]').value;
    const preco = document.querySelector('[data-preco]').value;
    const descricao = document.querySelector('[data-descricao]').value;

    produtoServices.criaProduto(nome, url, preco, categoria, descricao).then(resposta => {
        window.location.pathname = '/index.html';
        console.log(resposta);
    }).catch (error => {
        console.log(error);
    })
})