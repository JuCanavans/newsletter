
document.getElementById('submitBtn').addEventListener('click', function(event) {
    var inputEmail = document.getElementById('emailInput');
    var mensagemDiv = document.getElementById('alert');
    var mensagemSucessoEnvioEmail = document.getElementById('mensagemThanks');
    var secaoValidadorEmail = document.getElementById('page_1');
    var secaoSucessoEmailValidado = document.getElementById('page_2');
    var dispensarMensagem = document.getElementById('dismissMenssage');

    // Validar o formato do e-mail
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verifica se o e-mail é válido, e direcionado entre as telas
    if (!regexEmail.test(inputEmail.value)) {
        mensagemDiv.style.display = 'block'; 
        event.preventDefault();
    } else {
        mensagemDiv.textContent = '';
        secaoValidadorEmail.style.display = 'none';
        secaoSucessoEmailValidado.style.display = 'block';
        mensagemSucessoEnvioEmail.innerHTML = `${inputEmail.value}`;
        dispensarMensagem.addEventListener('click', () =>{
            secaoSucessoEmailValidado.style.display = 'none';
            secaoValidadorEmail.style.display = 'flex';
        })
    }
});