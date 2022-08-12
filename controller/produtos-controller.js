import { produtoServices } from "../service/produtos-servicos.js";

const novoProduto = (name, price, imageURL, alt) => {
    let card = document.createElement('div');
    card.className = 'foto__container';
    const conteudo = `
        <img src="${imageURL}" alt="${alt}" class="foto__produto">
        <div class="produto__botoes">
            <button class="botao__produto botao__produto-apaga"></button>
            <button class="botao__produto botao__produto-edita"></button>
        </div>
        <div class="produto__descricao">
            <h2 class="produto__nome">${name}</h2>
            <p class="produto__preco">${price}</p>
            <p class="produto__codigo">#1111111</p>
        </div>
    `
    card.innerHTML = conteudo;
    return card;
}

const produtos = document.querySelector('[data-product]');
const render = async() => {
    try {
        const listaProdutos = await produtoServices.listaProdutos();
        console.log(listaProdutos);
        listaProdutos.forEach(elemento => {
            produtos.appendChild(novoProduto(elemento.name, elemento.price, elemento.imageURL, elemento.alt));
        });
    } catch (error) {
        console.log(error);
    }
}

render();