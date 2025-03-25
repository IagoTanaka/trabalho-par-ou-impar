document.addEventListener('DOMContentLoaded', () => {
    const parButton = document.getElementById('par');
    const imparButton = document.getElementById('impar');
    const playButton = document.getElementById('playButton');
    const userNumberInput = document.getElementById('userNumber');
    const resultMessage = document.getElementById('message');
    let userChoice = '';

    // Função para gerar um número aleatório para o computador (de 0 a 10)
    function gerarNumeroComputador() {
        return Math.floor(Math.random() * 11); // Número aleatório entre 0 e 10
    }

    // Função para definir a escolha do jogador (Par ou Ímpar)
    function definirEscolha(escolha) {
        userChoice = escolha;
        parButton.disabled = true;
        imparButton.disabled = true;
    }

    // Função para jogar o jogo
    function jogar() {
        const userNumber = parseInt(userNumberInput.value);
        const computerNumber = gerarNumeroComputador();
        const total = userNumber + computerNumber;
        const isEven = total % 2 === 0;

        if (userNumber < 0 || userNumber > 10 || isNaN(userNumber)) {
            resultMessage.textContent = 'Por favor, escolha um número válido entre 0 e 10!';
            return;
        }

        if (userChoice === 'par' && isEven || userChoice === 'impar' && !isEven) {
            resultMessage.textContent = `Você escolheu ${userNumber}, o computador escolheu ${computerNumber}. Total: ${total}. Você VENCEU!`;
        } else {
            resultMessage.textContent = `Você escolheu ${userNumber}, o computador escolheu ${computerNumber}. Total: ${total}. Você PERDEU!`;
        }

        // Resetando o jogo para a próxima rodada
        parButton.disabled = false;
        imparButton.disabled = false;
        userNumberInput.value = '';
    }

    // Eventos para os botões Par e Ímpar
    parButton.addEventListener('click', () => definirEscolha('par'));
    imparButton.addEventListener('click', () => definirEscolha('impar'));

    // Evento para o botão Jogar
    playButton.addEventListener('click', jogar);
});
