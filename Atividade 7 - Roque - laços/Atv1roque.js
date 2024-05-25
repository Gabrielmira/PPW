var base = Number(prompt("Digite a base:"));
var expoente = Number(prompt("Digite o expoente:"));
var resultado = 1;
for (var i = 0; i < expoente; i++) {
    resultado *= base;
}
console.log(base + " elevado a " + expoente + " é " + resultado);


var pares = 0;
var impares = 0;
for (var i = 0; i < 10; i++) {
    var num = Number(prompt("Digite um número inteiro:"));
    if (num % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log("Quantidade de números pares: " + pares);
console.log("Quantidade de números ímpares: " + impares);


var n = Number(prompt("Digite o valor de n:"));
var fibonacci = [0, 1];
for (var i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log("Série de Fibonacci até o " + n + "-ésimo termo: " + fibonacci);


var fibonacci = [0, 1];
while (true) {
    var next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (next > 500) break;
    fibonacci.push(next);
}
console.log("Série de Fibonacci até o valor ser maior que 500: " + fibonacci);


var num = Number(prompt("Digite um número inteiro para calcular o fatorial:"));
var fatorial = 1;
for (var i = num; i > 1; i--) {
    fatorial *= i;
}
console.log("O fatorial de " + num + " é " + fatorial);


var num = Number(prompt("Digite um número inteiro para calcular o fatorial:"));
var fatorial = 1;
for (var i = num; i > 1; i--) {
    fatorial *= i;
}
console.log("O fatorial de " + num + " é " + fatorial);


var n = Number(prompt("Digite a quantidade de números:"));
var numeros = [];
for (var i = 0; i < n; i++) {
    numeros.push(Number(prompt("Digite um número:")));
}
var menor = Math.min(...numeros);
var maior = Math.max(...numeros);
var soma = numeros.reduce((a, b) => a + b, 0);
console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);


var n = Number(prompt("Digite a quantidade de números:"));
var numeros = [];
for (var i = 0; i < n; i++) {
    var num;
    do {
        num = Number(prompt("Digite um número entre 0 e 1000:"));
    } while (num < 0 || num > 1000);
    numeros.push(num);
}
var menor = Math.min(...numeros);
var maior = Math.max(...numeros);
var soma = numeros.reduce((a, b) => a + b, 0);
console.log("Menor valor: " + menor);
console.log("Maior valor: " + maior);
console.log("Soma dos valores: " + soma);


do {
    var num;
    do {
        num = Number(prompt("Digite um número inteiro positivo menor que 16 para calcular o fatorial:"));
    } while (num <= 0 || num >= 16);

    var fatorial = 1;
    for (var i = num; i > 1; i--) {
        fatorial *= i;
    }
    console.log("O fatorial de " + num + " é " + fatorial);

    var continuar = prompt("Deseja calcular outro fatorial? (s/n)").toLowerCase();
} while (continuar === 's');


var num = Number(prompt("Digite um número inteiro:"));
var ehPrimo = true;
for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        ehPrimo = false;
        break;
    }
}
if (ehPrimo) {
    console.log(num + " é um número primo.");
} else {
    console.log(num + " não é um número primo.");
}


var num = Number(prompt("Digite um número inteiro:"));
var divisores = [];
for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        divisores.push(i);
        if (i !== num / i) {
            divisores.push(num / i);
        }
    }
}
if (divisores.length === 0) {
    console.log(num + " é um número primo.");
} else {
    console.log(num + " não é um número primo. É divisível por: " + divisores.join(", "));
}


var N = Number(prompt("Digite o valor de N:"));
var qtdDivisoes = 0;
var primos = [];

for (var num = 2; num <= N; num++) {
    var ehPrimo = true;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        qtdDivisoes++;
        if (num % i === 0) {
            ehPrimo = false;
            break;
        }
    }
    if (ehPrimo) {
        primos.push(num);
    }
}

console.log("Números primos entre 1 e " + N + ": " + primos.join(", "));
console.log("Número de divisões executadas: " + qtdDivisoes);


var N = Number(prompt("Digite a quantidade de notas:"));
var notas = [];
for (var i = 0; i < N; i++) {
    notas.push(Number(prompt("Digite uma nota:")));
}
var soma = notas.reduce((a, b) => a + b, 0);
var media = soma / N;
console.log("A média aritmética das notas é: " + media);
