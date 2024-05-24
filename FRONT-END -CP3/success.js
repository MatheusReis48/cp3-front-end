document.addEventListener('DOMContentLoaded', (event) => {
    alert('Cadastro realizado!');
    
    // Recupera os dados do localStorage
    const userDataJSON = localStorage.getItem('userData');
    
    // Exibe os dados do usuário
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        const userDataElement = document.getElementById('userData');
        userDataElement.textContent = JSON.stringify(userData, undefined, 2);
    }
});
