let div = document.getElementsByClassName('container__file')[0];
let nome = document.getElementById('inputLabel');
let arquivo = document.getElementById('inputImagem');
let nomeInput = document.getElementById('nome');
let precoInput = document.getElementById('preco');

div.addEventListener('click', function() {
    arquivo.click();
});

arquivo.addEventListener('change', function() {
    if(arquivo.files.length > 0) {
        nome.innerHTML = arquivo.files[0].name;
    }
});

nomeInput.addEventListener('blur', (e) => {
    valida(e.target);
});

precoInput.addEventListener('blur', (e) => {
    validaPreco(e.target);
});

function valida(input) {
    let mensagem = '';
    if(nomeInput.value.length > 20) {
        mensagem = 'Limite de 20 caracteres atingido!';
        nomeInput.classList.add('form__erro');
    } else if (nomeInput.value == '') {
        mensagem = 'O campo não pode ficar vazio!';
        nomeInput.classList.add('form__erro');       
    } else {
        nomeInput.classList.remove('form__erro');
    }
    input.setCustomValidity(mensagem);
}

function validaPreco(input) {
    let regex = new RegExp(/^[0-9.]+$/)
    if (input.value == '') {
        mensagem = 'Este campo não pode ficar em branco';
        input.classList.add('form__erro');
    } else if (regex.test(input.value) == false) {
        mensagem = 'Este campo não pode conter letras';
        input.classList.add('form__erro');       
    } else if(regex.test(input.value) == true) {
        // precoInput = precoInput.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        mensagem = '';  
        input.classList.remove('form__erro');      
    }
    input.setCustomValidity(mensagem);
}

// Campo para preço do produto: o usuário poderá digitar apenas números.
// Campo para descrição do produto: deve ter no máximo 150 carateres.
// Botão adicionar produto: caso o formulário esteja preenchido corretamente o produto será adicionado, do contrário deverá mostrar uma mensagem de erro.
// Lembrando que nenhum dos campos deve ficar em branco ou vazio.