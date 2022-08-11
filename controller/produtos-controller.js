import { produtoServices } from "../service/produtos-servicos.js";

const novoProduto = (name, price, imageURL, alt) => {
    let card = document.createElement('div');
    card.className = 'produto__container';
    const conteudo = `
        <img src="${imageURL}" alt="${alt}" class="produto__imagem">
        <div class="produto__descricao">
            <h3 class="produto__nome">${name}</h3>
            <p class="produto__preco">${Number(price).toFixed(2)}</p>
            <a href="#" class="produto__botao">Ver produto</a>
        </div>
    </div>
    `;
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