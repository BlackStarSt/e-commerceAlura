const email = document.getElementById('email');
const senha = document.getElementById('senha');

email.addEventListener('blur', (e) => {
    valida(e.target);
});

senha.addEventListener('blur', (e) => {
    valida(e.target);
});

function valida(input) {
    let regex = new RegExp(/[\s]/gi);
    if (input.value == '') {
        mensagem = 'Este campo não pode ficar em branco';
        input.classList.add('form__erro');
    } else if (regex.test(input.value) == true) {
        mensagem = 'Este campo não pode conter espaços em branco';
        input.classList.add('form__erro');       
    } else if(regex.test(input.value) == false) {
        mensagem = '';  
        input.classList.remove('form__erro');      
    }
    input.setCustomValidity(mensagem);
}