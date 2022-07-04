// AC: 20%
// AG: 10%
// AT: 70%
let ac=parseFloat(prompt("Digite o valor da nota AC"));
let ag=parseFloat(prompt("Digite o valor da nota AG"));
let at=parseFloat(prompt("Digite o valor da nota AT"));
let acm=(ac*0.2);
let agm=(ag*0.1);
let atm=(at*0.7);
let media=(acm+agm+atm);
alert (`O valor da média é: ${media}`);