const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua data de nascimento (AAAA-MM-DD): ", function (dataNascimento) {
    const idade = new Date().getFullYear() - new Date(dataNascimento).getFullYear();
    console.log(idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.");
    rl.close();
});
