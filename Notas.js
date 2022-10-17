/*
    1 - Faça um algoritmo que dado as 03 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    -Média menor que 5 -> reprovado
    -Média entre 5 e 7 -> recuperação
    -Média acima de 7 -> aprovado

*/

let nota1 = 5;
let nota2 = 6;
let nota3 = 7;
let media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));

if (media < 5) {
    console.log('Aluno reprovado, nota final: ' + media.toFixed(2));
} else if (media >= 5 && media < 7) {
    console.log('Aluno em recuperação, nota final: ' + media.toFixed(2));
} else {
    console.log('Aluno Aprovado, nota final: ' + media.toFixed(2));
}