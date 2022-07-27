let formNome = document.getElementById('formNome');
let formMensagem = document.getElementById('formMensagem');
let formBotao = document.getElementById('formBotao');
let mensagem = '';

formNome.addEventListener('blur', (e) => {
    validaNome(e.target);
});

formMensagem.addEventListener('blur', (e) => {
    validaMensagem(e.target);
});

function validaNome(input) {
    if (formNome.value == '') {
        formNome.classList.add('form__erro');
        mensagem = 'Este campo não pode ficar em branco';
    } else if(formNome.value.length > 40) {
        formNome.classList.add('form__erro');
        mensagem = 'Limite de 40 caracteres foi atingido!';
    } else if (!formNome.value == '') {
        formNome.classList.remove('form__erro');
        mensagem = '';
    }
    input.setCustomValidity(mensagem);
}

function validaMensagem(textearea) {
    if (formMensagem.value == '') {
        formMensagem.classList.add('form__erro');
        mensagem = 'Este campo não pode ficar em branco';
    } else if(formMensagem.value.length > 120) {
        formMensagem.classList.add('form__erro');
        mensagem = 'Limite de 120 caracteres foi atingido!';
    } else if (!formMensagem.value == '') {
        formMensagem.classList.remove('form__erro');
        mensagem = '';
    }
    textearea.setCustomValidity(mensagem);
}