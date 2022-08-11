let nomeInput = document.getElementById('nome');
let precoInput = document.getElementById('preco');
let descricaoInput = document.getElementById('descricao');

nomeInput.addEventListener('blur', (e) => {
    valida(e.target);
});

precoInput.addEventListener('blur', (e) => {
    validaPreco(e.target);
});

descricaoInput.addEventListener('blur', (e) => {
    validaDescricao(e.target);
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
        mensagem = '';  
        input.classList.remove('form__erro');      
    }
    input.setCustomValidity(mensagem);
}

function validaDescricao(input) {
    let mensagem = '';
    if(descricaoInput.value.length > 150) {
        mensagem = 'Limite de 150 caracteres atingido!';
        descricaoInput.classList.add('form__erro');
    } else if (descricaoInput.value == '') {
        mensagem = 'O campo não pode ficar vazio!';
        descricaoInput.classList.add('form__erro');       
    } else {
        descricaoInput.classList.remove('form__erro');
    }
    input.setCustomValidity(mensagem);
}