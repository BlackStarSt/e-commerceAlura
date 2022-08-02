let div = document.getElementsByClassName('container__file')[0];
let nome = document.getElementById('inputLabel');
let arquivo = document.getElementById("inputImagem");

div.addEventListener("click", function(){
    arquivo.click();
});

arquivo.addEventListener("change", function(){
    if(arquivo.files.length > 0) {
        nome.innerHTML = arquivo.files[0].name;
    }
});

// Campo "adicionar imagem" e o botão para procurar imagem no computador: deve permitir ao usuário carregar uma nova imagem.
// Campo para nome do produto: deve ter no máximo 20 carateres.
// Campo para preço do produto: o usuário poderá digitar apenas números.
// Campo para descrição do produto: deve ter no máximo 150 carateres.
// Botão adicionar produto: caso o formulário esteja preenchido corretamente o produto será adicionado, do contrário deverá mostrar uma mensagem de erro.
// Lembrando que nenhum dos campos deve ficar em branco ou vazio.