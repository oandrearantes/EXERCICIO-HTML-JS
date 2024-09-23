document.getElementById('btn-submit').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const messageDiv = document.getElementById('message');
    const button = document.getElementById('btn-submit');
    const tryAgainButton = document.getElementById('btn-try-again');

    // Oculta o botão de submissão
    button.style.display = 'none';

    if (campoB > campoA) {
        messageDiv.textContent = 'Sucesso! Campo B é maior que Campo A.';
        messageDiv.style.backgroundColor = 'green'; // Fundo verde para sucesso
    } else {
        messageDiv.textContent = 'Erro! Campo B deve ser maior que Campo A.';
        messageDiv.style.backgroundColor = 'red'; // Fundo vermelho para erro
    }

    messageDiv.style.display = 'block'; // Mostra a mensagem
    tryAgainButton.style.display = 'block'; // Mostra o botão de tentar novamente
});

// Adiciona o evento ao botão de tentar de novo
document.getElementById('btn-try-again').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    const button = document.getElementById('btn-submit');
    const tryAgainButton = document.getElementById('btn-try-again');

    // Oculta a mensagem e o botão de tentar de novo
    messageDiv.style.display = 'none';
    tryAgainButton.style.display = 'none';
    
    // Mostra novamente o botão de submissão
    button.style.display = 'block';
    
    // Limpa os campos do formulário
    document.getElementById('campoA').value = '';
    document.getElementById('campoB').value = '';
});