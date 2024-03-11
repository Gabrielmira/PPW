const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o comprimento do primeiro lado do triângulo: ", function (lado1) {
    rl.question("Digite o comprimento do segundo lado do triângulo: ", function (lado2) {
        rl.question("Digite o comprimento do terceiro lado do triângulo: ", function (lado3) {
            const a = parseFloat(lado1);
            const b = parseFloat(lado2);
            const c = parseFloat(lado3);

            if (a + b > c && a + c > b && b + c > a) {
                if (a === b && b === c) {
                    console.log("É um triângulo equilátero.");
                } else if (a === b || b === c || a === c) {
                    console.log("É um triângulo isósceles.");
                } else {
                    console.log("É um triângulo escaleno.");
                }
            } else {
                console.log("Os lados fornecidos não formam um triângulo válido.");
            }

            rl.close();
        });
    });
});
