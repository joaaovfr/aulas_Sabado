/*1.  Faça um programa que entre com três números, faça a média aritmética e mostre o resultado
const num1 = 10;
const num2 = 2;
const num3 = 15;

const resultado = (num1 + num2 + num3) / 3;
alert(resultado);
*/

//----------------------------------------------------------------------------------------------------------------//

/*
2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu
novo salário, sabendo que o mesmo teve um aumento de 10%.

const nome = "João Vitor";
const salario = 2000;

const novoSalario = salario * 1.1;

alert(" O novo salário de " + nome + " é: " + novoSalario);
*/

//----------------------------------------------------------------------------------------------------------------//

/*
3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem
ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do
cálculo atribuir o valor para uma variável C. 

let a = 2;
let b = 5;

let soma = a + b;
let mult = a * b;

if (a == b) {
  alert(soma);
} else {
  alert("Valor da váriavel C é : " + mult);
}
*/

//----------------------------------------------------------------------------------------------------------------//

/*4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o
valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for
parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o
parcelamento for em 5 vezes, o acréscimo será de 20%. 

let preco = 1000;
let total = null;
let prestacao = null;

let parcela = 3;

if (parcela == 3) {
  total = preco * 1.1;
  prestacao = total / parcela;
} else if (parcela == 5) {
  total = preco * 1.2;
  prestacao = total / parcela;
} else {
  alert("Defina em 3x ou 5x");
}

alert(`
    VALOR PRODUTO: ${preco}
    VALOR PARCELA : ${prestacao}
    NÚMEROS PARCELAS : ${parcela}
    TOTAL : ${total} `);
*/

//---------------------------------------------------------------------------------------------------------------//

/*5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao
final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média
para aprovação é igual ou superior a 8. 

let aluno = "João";
let nota1 = 10;
let nota2 = 6;
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 8) {
  alert(aluno + " está aprovado! " + "A média é: " + media);
} else {
  alert(aluno + " está Reprovado! ");
}
*/
//---------------------------------------------------------------------------------------------------------------//

/*6. Tem-se um conjunto de dados contendo a altura  de 15 pessoas. Faça um programa que calcule e escreva:
a maior e a menor altura do grupo;
a média de altura;
o número de pessoas com mais de 1.81 de altura.

let alturas = [
  2, 1.7, 1.8, 2.0, 1.5, 1.7, 1.8, 2.0, 1.5, 1.7, 2.8, 2.1, 1.3, 1.6, 1.7,
];

let maiorAltura = 0;
let menorAltura = 5;
let total = 0;

for (let i = 0; i < alturas.length; i++) {
  const element = alturas[i];

  if (element > maiorAltura) {
    maiorAltura = element;
  }
  if (element < menorAltura) {
    menorAltura = element;
  }
  // total += element --- MODO MAIS FÁCIL /////
  total = element + total;
}
let media = total / alturas.length;

alert(`A maior altura é: ${maiorAltura}
      A menor altura é: ${menorAltura}
      A média de alturas é: ${media}`);*/

//---------------------------------------------------------------------------------------------------------------//

/*7. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: 
ótimo: 3
 bom: 2 
regular: 1

let pesquisas = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3];

let idades = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50, 10, 20, 30, 40, 50];

let totalOtimo = 0;

let qtdOtimo = 0;

let qtdRegular = 0;
let qtdBom = 0;

for (let i = 0; i < pesquisas.length; i++) {
  const pesquisa = pesquisas[i];
  const idade = idades[i];

  if (pesquisa == 3) {
    totalOtimo += idade;
    qtdOtimo++;
  }
  if (pesquisa == 1) {
    qtdRegular++;
  }
  if (pesquisa == 2) {
    qtdBom++;
  }
}

mediaOtimo = totalOtimo / qtdOtimo;

alert(`
A media das pessoas que respoderam ótimo: ${mediaOtimo}
pessoas que votaram regular ${qtdRegular}
% de votos que votaram bom : ${(qtdBom * 100) / pesquisas.lenght}`;/*

//---------------------------------------------------------------------------------------------------------------//

/*9. Faça um programa que receba 10 números, calcule e imprima a soma dos números pares e a soma dos números primos.

let numero = null;
let par = null;
let impar = null;

for (let i = 1; i <= 10; i++) {
  numero = parseInt(prompt("Digite um número:"));

  if (numero % 2 == 0) {
    par += numero;
  } else {
    impar += numero;
  }
}
alert("A soma dos números pares é: " + par);
alert("A soma dos números ímpares é: " + impar); */

//---------------------------------------------------------------------------------------------------------------//

/*10. Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
total de homens;
total de mulheres;
média das idades dos homens;
média dos pesos das mulheres.*/

let idades = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
let pesos = [1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5, 8.5, 9.5, 10.5];

let sexoM = 0;
let sexoF = 0;

for (let i = 0; i < idades.length; i++) {
  const pessoa = idades[i];
}
