// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  if (idade < 12 ){
    return"criança";
  }else if (idade < 18 ){
    return"adolescente";
  }else{
    return"adulto";
  }
  // escreva seu código aquinpx
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  return  preco - (preco / 100 * percentual)
  // escreva seu código aqui
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  if(nota >= 60){
    return "aprovado"
  }else if (nota <60 && nota >= 40){
    return "recuperação"
  }else{
    return "reprovado"
  }
  // escreva seu código aqui
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  let soma = 0
  for ( const numero of numeros){
    if(numero % 2 === 0 ){
      soma+=numero
    }
  }
  return soma
  // escreva seu código aqui
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  let contador = 0
  for(const caractere of texto){
    if(caractere === letra){
      contador++
    }
  }
  return contador
  // escreva seu código aqui
}
