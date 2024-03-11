const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor que deseja sacar: ", function (valorSaque) {
    const valor = parseInt(valorSaque);

    if (valor % 10 === 0) {
        console.log("Saque realizado com sucesso.");
    } else {
        console.log("Valor inválido. Digite um valor múltiplo de 10.");
    }

    rl.close();
});
