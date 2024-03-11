const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}


function categorizarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        return "Excesso de peso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        return "Obesidade grau I";
    } else if (imc >= 35.0 && imc <= 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}


rl.question("Digite seu peso (em kg): ", function (peso) {
    rl.question("Digite sua altura (em metros): ", function (altura) {
        
        var imc = calcularIMC(parseFloat(peso), parseFloat(altura));

    
        var categoria = categorizarIMC(imc);

        console.log("Seu IMC é: " + imc.toFixed(2));
        console.log("Categoria do IMC: " + categoria);

        rl.close();
    });
});
