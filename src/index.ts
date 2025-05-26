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
// Função para verificar se um número é par ou ímpar
async function parOuImpar() {
  const entrada = await perguntar("Digite um número inteiro: ");
  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
  } else {
    if (numero % 2 === 0) {
      console.log(`O número ${numero} é par.`);
    } else {
      console.log(`O número ${numero} é ímpar.`);
    }
  }
}
// Função para tabuada simples
async function tabuadaSimples() {
  const entrada = await perguntar("Digite um número inteiro: ");
  const numero = parseInt(entrada);

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
  } else {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
}

// Calculadora de IMC (Índice de Massa Corporal)
function classificarIMC(imc: number): string {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 24.9) {
        return "Peso normal";
    } else if (imc < 29.9) {
        return "Sobrepeso";
    } else if (imc < 34.9) {
        return "Obesidade grau 1";
    } else if (imc < 39.9) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3 (obesidade mórbida)";
    }
}
async function classimc() {
    const pesoInput = await perguntar("Digite seu peso (kg): ");
    const alturaInput = await perguntar("Digite sua altura (m): ");

    const peso = parseFloat(pesoInput);
    const altura = parseFloat(alturaInput);

    const imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificarIMC(imc)}`);

    rl.close();
}
// Calculadora de IMC (Índice de Massa Corporal)

// Programa Java com Herança: Pessoa e Aluno
class Pessoa {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
    }
}

class Aluno extends Pessoa {
    private matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        super(nome, idade);
        this.matricula = matricula;
    }

    public getMatricula(): string {
        return this.matricula;
    }

    public override exibirInformacoes(): void {
        super.exibirInformacoes();
        console.log(`Matrícula: ${this.matricula}`);
    }
}

async function alunop(): void {
    const aluno = new Aluno("João da Silva", 20, "2025A001");
    aluno.exibirInformacoes();
}
// Programa Java com Herança: Pessoa e Aluno

// Função principal com menu
async function menuPrincipal() {
  console.log("=== Menu ===");
  console.log("1 - Calculadora");
  console.log("2 - Contador de Palavras");
  console.log("3 - Calcular média de três notas");
  console.log("4 - Ordenar Array de Números");
  console.log("5 - Verificar se um número é par ou ímpar");
  console.log("6 - Ver Tabuada");
  console.log("7 - Calculadora de IMC");
  console.log("8 - Herança: Pessoa e Aluno");
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
    case '5':
      await parOuImpar();
      break;
    case '6':
      await tabuadaSimples();
      break;
    case '7':
      await classimc();
      break;
    case '8':
      await alunop();
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
