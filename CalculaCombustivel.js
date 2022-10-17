/*
Faça um programa para calcular o valor gasto de combustivel em uma viagem.
Você terá 05 variáveis, sendo elas :
1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo de combustível que você irá abastecer
4 - Valor médio de gasto do carro; 
5 - Distância em KM da viagem.
Imprima no console o valor que será gasto de combustivel para realizar essa viagem.
*/

let precoEtanol = 4;
let precoGasolina = 6;
let mediaKmPorLitro = 15;
let distanciaDaViagem = 100;
let tipoCombustivel = 'Gasolina';
let gastoViagemEtanol = (distanciaDaViagem / mediaKmPorLitro) * precoEtanol;
let gastoViagemGasolina = (distanciaDaViagem / mediaKmPorLitro) * precoGasolina;

if(tipoCombustivel === 'Etanol') {
    console.log('O gasto dessa viagem com etanol será de: R$ ' + gastoViagemEtanol.toFixed(2));
} else {
    console.log('O gasto dessa viagem com gasolina será de: R$ ' + gastoViagemGasolina.toFixed(2));
}