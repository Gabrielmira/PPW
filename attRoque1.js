const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function genNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function jogoAdv() {
    const numeroSecreto = genNum();
    let tentativas = 0;

    console.log("Bem-vindo ao Jogo de Adivinhação! Tente adivinhar o número secreto entre 1 e 100.");

    function chute() {
        rl.question("Digite seu palpite: ", function (entrada) {
            const palpite = parseInt(entrada);

            if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                console.log("Por favor, digite um número válido entre 1 e 100.");
                chute();
            } else {
                tentativas++;

                if (palpite === numeroSecreto) {
                    console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s).`);
                    rl.close();
                } else if (palpite < numeroSecreto) {
                    console.log("Tente novamente. O número secreto é maior.");
                    chute();
                } else {
                    console.log("Tente novamente. O número secreto é menor.");
                    chute();
                }
            }
        });
    }

    chute();
}

jogoAdv();
