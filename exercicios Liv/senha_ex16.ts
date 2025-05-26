// Função para validar a senha
function validarSenha(senha: string): boolean {
  // Verifica se a senha tem pelo menos 8 caracteres
  if (senha.length < 8) {
    return false;
  }

  // Verifica se a senha contém pelo menos uma letra maiúscula
  const temMaiuscula = /[A-Z]/.test(senha);

  // Verifica se a senha contém pelo menos uma letra minúscula
  const temMinuscula = /[a-z]/.test(senha);

  // Verifica se a senha contém pelo menos um número
  const temNumero = /\d/.test(senha);

  // Retorna verdadeiro somente se todos os critérios forem atendidos
  return temMaiuscula && temMinuscula && temNumero;
}

// Solicita ao usuário que digite uma senha (em navegador)
const senhaUsuario: string = prompt("Digite uma senha:") || "";

// Valida a senha e exibe o resultado
if (validarSenha(senhaUsuario)) {
  console.log("Senha válida!");
} else {
  console.log("Senha inválida! Ela deve conter:\n- Pelo menos 8 caracteres\n- Pelo menos uma letra maiúscula\n- Pelo menos uma letra minúscula\n- Pelo menos um número");
}
