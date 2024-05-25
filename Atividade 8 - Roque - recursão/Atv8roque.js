//Soma dos números de 1 à N
function somaAteN(N) {
    if (N <= 1) {
        return N;
    }
    return N + somaAteN(N - 1);
}
//Produto dos números de 1 à N
var N = Number(prompt("Digite um número inteiro positivo:"));
console.log("A soma de 1 até " + N + " é " + somaAteN(N));

function produtoAteN(N) {
    if (N <= 1) {
        return 1;
    }
    return N * produtoAteN(N - 1);
}

var N = Number(prompt("Digite um número inteiro positivo:"));
console.log("O produto de 1 até " + N + " é " + produtoAteN(N));

//Potência x^k sem utilizar Math.pow()
function potencia(x, k) {
    if (k === 0) {
        return 1;
    }
    return x * potencia(x, k - 1);
}

var x = Number(prompt("Digite a base (x):"));
var k = Number(prompt("Digite o expoente (k):"));
console.log(x + " elevado a " + k + " é " + potencia(x, k));

//N-ésimo número da sequência de Tribonacci
function tribonacci(N) {
    if (N === 0) {
        return 0;
    }
    if (N === 1 || N === 2) {
        return 1;
    }
    return tribonacci(N - 1) + tribonacci(N - 2) + tribonacci(N - 3);
}

//N-ésimo número de Pell
var N = Number(prompt("Digite um número inteiro positivo:"));
console.log("O " + N + "-ésimo número de Tribonacci é " + tribonacci(N));


function pell(N) {
    if (N === 0) {
        return 0;
    }
    if (N === 1) {
        return 1;
    }
    return 2 * pell(N - 1) + pell(N - 2);
}

var N = Number(prompt("Digite um número inteiro positivo:"));
console.log("O " + N + "-ésimo número de Pell é " + pell(N));
