//quando uma variável é do tipo Boolean, iniciamos ela com "is". Ex.: isNumeroDivisivelpor5

let numero = 30;
let isNumeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
    console.log('O número é ínvalido');
} else if (isNumeroDivisivelPor5) {
    console.log('Sim, é divisível por 5');
} else {
    console.log('Não é divisível por 5');
}