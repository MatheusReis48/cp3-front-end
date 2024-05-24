document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let dataNascimento = document.getElementById('dataNascimento').value;
    let genero = document.getElementById('genero').value;
    let raca = document.getElementById('raca').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let complemento = document.getElementById('complemento').value;
    let senha = document.getElementById('senha').value;
    let confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha !== confirmaSenha) {
        alert('Senhas não conferem');
        return;
    }

    const userData = {
        nome, email, cpf, dataNascimento, genero, raca, cep, rua, numero, cidade, estado, complemento, senha
    };

    // Armazena os dados do usuário no localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redireciona para a página de sucesso
    window.location.href = 'success.html';
});
