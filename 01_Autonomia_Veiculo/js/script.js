let kmi=parseFloat(prompt("Quantos km marcava no início da viagem?"));
let kms=parseFloat(prompt("Quantos km marcava no término da viagem?"));
let litros=parseFloat(prompt("Quantos litros foram abastecidos?"));
let autonomia=(kmi-kms)/litros;
alert (`Este veículo faz ${autonomia}km por litro`);