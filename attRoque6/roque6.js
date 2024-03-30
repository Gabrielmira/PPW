const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function validarNota() {
  rl.question('Digite uma nota entre 0 e 10: ', (nota) => {
    nota = parseFloat(nota);
    if (nota >= 0 && nota <= 10) {
      console.log('Nota válida!');
      rl.close();
    } else {
      console.log('Nota inválida! Digite novamente.');
      validarNota();
    }
  });
}

function validarSenha() {
  rl.question('Digite seu nome de usuário: ', (usuario) => {
    rl.question('Digite sua senha: ', (senha) => {
      if (senha !== usuario) {
        console.log('Senha válida!');
        rl.close();
      } else {
        console.log('Erro: senha não pode ser igual ao nome de usuário.');
        validarSenha();
      }
    });
  });
}

function validarInformacoes() {
  rl.question('Digite seu nome: ', (nome) => {
    rl.question('Digite sua idade: ', (idade) => {
      idade = parseInt(idade);
      rl.question('Digite seu salário: ', (salario) => {
        salario = parseFloat(salario);
        rl.question('Digite seu sexo (f/m): ', (sexo) => {
          rl.question('Digite seu estado civil (s/c/v/d): ', (estadoCivil) => {
            if (nome.length > 3 && idade > 0 && idade <= 150 && salario > 0 && (sexo === 'f' || sexo === 'm') && (estadoCivil === 's' || estadoCivil === 'c' || estadoCivil === 'v' || estadoCivil === 'd')) {
              console.log('Informações válidas!');
              rl.close();
            } else {
              console.log('Erro: informações inválidas.');
              validarInformacoes();
            }
          });
        });
      });
    });
  });
}

function calcularCrescimentoPopulacional() {
  let populacaoA = 80000;
  let populacaoB = 200000;
  let anos = 0;

  while (populacaoA < populacaoB) {
    populacaoA *= 1.03;
    populacaoB *= 1.015;
    anos++;
  }

  console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse a população do país B.`);
}

function calcularCrescimentoPersonalizado() {
  rl.question('Digite a população do país A: ', (populacaoA) => {
    populacaoA = parseFloat(populacaoA);
    rl.question('Digite a população do país B: ', (populacaoB) => {
      populacaoB = parseFloat(populacaoB);
      rl.question('Digite a taxa de crescimento anual do país A (em %): ', (taxaA) => {
        taxaA = parseFloat(taxaA) / 100;
        rl.question('Digite a taxa de crescimento anual do país B (em %): ', (taxaB) => {
          taxaB = parseFloat(taxaB) / 100;

          let anos = 0;
          while (populacaoA < populacaoB) {
            populacaoA *= (1 + taxaA);
            populacaoB *= (1 + taxaB);
            anos++;
          }

          console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse a população do país B.`);
          rl.close();
        });
      });
    });
  });
}

function imprimirNumeros() {
  console.log('Números de 1 a 20:');
  for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

  console.log('\nNúmeros de 1 a 20 lado a lado:');
  let numerosLadoALado = '';
  for (let i = 1; i <= 20; i++) {
    numerosLadoALado += i + ' ';
  }
  console.log(numerosLadoALado);
}

function encontrarMaiorNumero() {
  let numeros = [];
  rl.question('Digite 5 números separados por espaço: ', (input) => {
    numeros = input.split(' ').map(numero => parseInt(numero));
    const maiorNumero = Math.max(...numeros);
    console.log(`O maior número é: ${maiorNumero}`);
    rl.close();
  });
}

function calcularSomaEMedia() {
  let numeros = [];
  rl.question('Digite 5 números separados por espaço: ', (input) => {
    numeros = input.split(' ').map(numero => parseInt(numero));
    const soma = numeros.reduce((acc, curr) => acc + curr, 0);
    const media = soma / numeros.length;
    console.log(`A soma dos números é: ${soma}`);
    console.log(`A média dos números é: ${media}`);
    rl.close();
  });
}

function imprimirNumerosImpares() {
  console.log('Números ímpares de 1 a 50:');
  for (let i = 1; i <= 50; i += 2) {
    console.log(i);
  }
}

function gerarNumerosCompreendidos() {
  rl.question('Digite dois números inteiros separados por espaço (menor e maior): ', (input) => {
    const [menor, maior] = input.split(' ').map(numero => parseInt(numero));
    for (let i = menor; i <= maior; i++) {
      console.log(i);
    }
    rl.close();
  });
}

function gerarNumerosCompreendidosESomar() {
  rl.question('Digite dois números inteiros separados por espaço (menor e maior): ', (input) => {
    const [menor, maior] = input.split(' ').map(numero => parseInt(numero));
    let soma = 0;
    for (let i = menor; i <= maior; i++) {
      console.log(i);
      soma += i;
    }
    console.log(`A soma dos números é: ${soma}`);
    rl.close();
  });
}

function gerarTabuada() {
  rl.question('Digite o número para gerar a tabuada (1 a 10): ', (numero) => {
    numero = parseInt(numero);
    if (numero >= 1 && numero <= 10) {
      console.log(`Tabuada de ${numero}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`);
      }
      rl.close();
    } else {
      console.log('Número inválido');
      gerarTabuada();
    }
  });
}

