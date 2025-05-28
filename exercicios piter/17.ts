import * as readline from 'readline';

// Função para gerar número aleatório de 1 a 100
function gerarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 100) + 1;
}

const numeroSorteado = gerarNumeroAleatorio();
let tentativasFeitas = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Tente adivinhar o número entre 1 e 100.');

function perguntar(): void {
    rl.question('Digite sua tentativa: ', (input) => {
        const tentativa = parseInt(input);
        tentativasFeitas++;

        if (isNaN(tentativa)) {
            console.log('Por favor, digite um número válido.');
        } else if (tentativa < numeroSorteado) {
            console.log('Tente um número MAIOR.');
        } else if (tentativa > numeroSorteado) {
            console.log('Tente um número MENOR.');
        } else {
            console.log(`Parabéns! Você acertou o número em ${tentativasFeitas} tentativas.`);
            rl.close();
            return;
        }

        perguntar(); // Continua perguntando até acertar
    });
}

perguntar();
