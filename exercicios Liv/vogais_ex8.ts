// Função para contar o número de vogais em uma string
function contarVogais(texto: string): number {
  // String contendo todas as vogais (maiúsculas e minúsculas)
  const vogais = "aeiouAEIOU";
  let contador = 0; // Variável para contar as vogais

  // Percorre cada caractere da string
  for (let i = 0; i < texto.length; i++) {
    // Verifica se o caractere atual é uma vogal
    if (vogais.includes(texto[i])) {
      contador++; // Incrementa o contador se for vogal
    }
  }

  // Retorna o número de vogais encontradas
  return contador;
}

// Solicita ao usuário que digite uma string (funciona em ambientes de navegador)
const entradaUsuario: string = prompt("Digite uma palavra ou frase:") || "";

// Chama a função para contar as vogais na string digitada pelo usuário
const quantidadeVogais = contarVogais(entradaUsuario);

// Exibe o resultado no console
console.log(`A quantidade de vogais é: ${quantidadeVogais}`);
