// Importa o módulo 'readline' do Node.js
const readline = require('readline');

// Cria a interface para leitura de entrada e escrita de saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função auxiliar para ler um número do usuário
function lerNumero(pergunta: string): Promise<number> {
  return new Promise((resolve) => {
    rl.question(pergunta, (entrada: string) => {
      const numero = parseInt(entrada);
      if (isNaN(numero)) {
        console.log("Por favor, digite um número inteiro válido.");
        resolve(lerNumero(pergunta)); // Repetir até receber um número válido
      } else {
        resolve(numero);
      }
    });
  });
}

// Função principal
async function main() {
  const numero1 = await lerNumero("Digite o primeiro número inteiro: ");
  const numero2 = await lerNumero("Digite o segundo número inteiro: ");
  const soma = numero1 + numero2;
  console.log(`A soma de ${numero1} e ${numero2} é ${soma}.`);
  rl.close();
}

main();
