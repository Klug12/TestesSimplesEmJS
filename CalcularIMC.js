/*
    O IMC - Índice de massa corporal é um critério da organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Fórmula do IMC:
    IMC = Peso / (altura * altura)
    ou
    IMC = Peso / (altura ** 2)
    Peso em Kg e altura em metros (0.00)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC * condição (adultos):
    -Abaixo de 18.5: abaixo do peso
    -Entre 18.5 e 25: peso normal
    -Entre 25 e 30: acima do peso
    -Entre 30 e 40: obeso
    -Acima de 40: obesidade grave

*/

let peso = 105;
let altura = 1.86;
let imc = peso / (altura ** 2);

if(imc < 18.5){
    console.log('IMC abaixo de 18.5 é abaixo do peso, seu IMC é: ' + imc.toFixed(2));
}else if(imc >= 18.5 && imc < 25){
    console.log('IMC entre 18.5 e 25 é o peso normal, seu IMC é: ' + imc.toFixed(2));
}else if(imc >= 25 && imc < 30){
    console.log('IMC entre 25 e 30 é acima do peso, seu IMC é: ' + imc.toFixed(2));
}else if(imc >= 30 && imc < 40){
    console.log('IMC entre 30 e 40 significa obeso, seu IMC é: ' + imc.toFixed(2));
}else{
    console.log('IMC acima de 40, obesidade grave, seu IMC é: ' + imc.toFixed(2));
}
