/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabelas a seguir para ler qual a condição de pagammento escolhida e efetuar o cálculo adequado.

    Códigos:
    -À vista no débito: recebe 10% de desconto;
    -À vista no dinheiro ou PIX: recebe 15% de desconto;
    -Em duas vezes, preço normal da etiqueta sem juros;
    -Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const valorEtiqueta = 100;
const formaDePagamento = 12;

if (formaDePagamento === 1) {
    console.log(valorEtiqueta - (valorEtiqueta * 0.1));
}else if(formaDePagamento === 2) {
    console.log(valorEtiqueta - (valorEtiqueta * 0.15));
}else if(formaDePagamento === 3) {
    console.log(valorEtiqueta);
}else {
    console.log(valorEtiqueta + (valorEtiqueta * 0.1));
}