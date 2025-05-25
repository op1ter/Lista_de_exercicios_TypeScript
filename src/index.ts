import readline from 'readline';

// Cria a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função auxiliar para perguntar ao usuário
const perguntar = (pergunta: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(pergunta, resolve);
  });
};

// Função para calcular a média de três notas
async function calcularMediaNotas() {
  let n1: number, n2: number, n3: number;

  while (true) {
    n1 = parseFloat(await perguntar("Digite a primeira nota: ")); //parseFloat converte a string para número
    n2 = parseFloat(await perguntar("Digite a segunda nota: "));
    n3 = parseFloat(await perguntar("Digite a terceira nota: "));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) { //isNaN verifica se o valor é um número
      console.log("Por favor, insira valores numéricos válidos.");
    } else {
      break;
    }
  }
  const media = (n1 + n2 + n3) / 3;
  console.log(`A média das notas é: ${media.toFixed(2)}`);
}

// Função para a calculadora simples
async function calculadoraSimples() {
  const numero1 = parseFloat(await perguntar("Digite o primeiro número: "));
  const numero2 = parseFloat(await perguntar("Digite o segundo número: "));
  const operacao = (await perguntar("Digite a operação (+, -, *, /): ")).trim();

  let resultado: number;

  switch (operacao) {
    case '+':
      resultado = numero1 + numero2;
      console.log(`Resultado: ${resultado}`);
      break;
    case '-':
      resultado = numero1 - numero2;
      console.log(`Resultado: ${resultado}`);
      break;
    case '*':
      resultado = numero1 * numero2;
      console.log(`Resultado: ${resultado}`);
      break;
    case '/':
      if (numero2 !== 0) {
        resultado = numero1 / numero2;
        console.log(`Resultado: ${resultado}`);
      } else {
        console.log("Erro: Divisão por zero não é permitida.");
      }
      break;
    default:
      console.log("Operação inválida.");
  }
}

// Função para o contador de palavras
async function contadorPalavrasSimples() {
  const frase = (await perguntar("Digite uma frase: ")).trim();

  if (frase.length === 0) {
    console.log("Nenhuma palavra encontrada.");
  } else {
    const palavras = frase.split(/\s+/);
    console.log(`Número de palavras: ${palavras.length}`);
  }
}

//função para ordenar um array de números em ordem crescente
async function OrdenarArray() {
  const numerosInput = await perguntar("Digite números separados por vírgula: ");
  const numerosArray = numerosInput.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

  if (numerosArray.length === 0) {
    console.log("Nenhum número válido foi inserido.");
    return;
  }

  for (let i = 0; i < numerosArray.length; i++) {
    for (let j = 0; j < numerosArray.length - 1; j++) {
      if (numerosArray[j] > numerosArray[j + 1]) {
        // Troca os números de posição
        const temp = numerosArray[j];
        numerosArray[j] = numerosArray[j + 1];
        numerosArray[j + 1] = temp;
      }
    }
  }

  console.log(`Números ordenados: ${numerosArray.join(', ')}`);
}

// Função principal com menu
async function menuPrincipal() {
  console.log("=== Menu ===");
  console.log("1 - Calculadora");
  console.log("2 - Contador de Palavras");
  console.log("3 - Calcular média de três notas");
  console.log("4 - Ordenar Array de Números");
  console.log("0 - Sair");

  const opcao = await perguntar("Escolha uma opção: ");

  switch (opcao.trim()) {
    case '1':
      await calculadoraSimples();
      break;
    case '2':
      await contadorPalavrasSimples();
      break;
    case '3':
      await calcularMediaNotas();
      break;
    case '4':
      await OrdenarArray();
      break;
    case '0':
      console.log("Encerrando o programa...");
      rl.close();
      return;
    default:
      console.log("Opção inválida.");
  }

  console.log(""); // Linha em branco para separar execuções
  await menuPrincipal(); // Reinicia o menu após uma operação
}

menuPrincipal(); // Executa o programa
