function exibirMensagemDeBoasVindas() {
    console.log("Bem-vindo à página!");
}

function verificarParOuImpar(numero) {
    return numero % 2 === 0;
}

function calcularMedia(numeros) {
    const total = numeros.reduce((acc, curr) => acc + curr, 0);
    return total / numeros.length;
}

function converterParaCaixaAlta(texto) {
    return texto.toUpperCase();
}

function verificarPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function inverterArray(array) {
    return array.reverse();
}

function acrescentarPorcentagem(valor, porcentagem) {
    return valor * (1 + porcentagem / 100);
}

function verificarPalindromo(palavra) {
    const reversed = palavra.split("").reverse().join("");
    return palavra === reversed;
}

function decimalParaBinario(numero) {
    return numero.toString(2);
}

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

exibirMensagemDeBoasVindas();
console.log(verificarParOuImpar(5));
console.log(calcularMedia([1, 2, 3, 4, 5]));
console.log(converterParaCaixaAlta("hello"));
console.log(verificarPrimo(7));
console.log(inverterArray([1, 2, 3]));
console.log(acrescentarPorcentagem(100, 10));
console.log(verificarPalindromo("radar"));
console.log(decimalParaBinario(10));
console.log(calcularFatorial(5));
