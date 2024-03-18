function verificarSaldo(saldo) {
    if (saldo > 0) {
      console.log("Saldo positivo");
    } else {
      console.log("Saldo negativo");
    }
  }
  
  function realizarSaque(saldoAtual, valorSaque) {
    if (valorSaque <= saldoAtual) {
      saldoAtual -= valorSaque;
      console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
    } else {
      console.log("Saldo insuficiente");
    }
  }
  
  function realizarDeposito(saldoAtual, valorDeposito) {
    saldoAtual += valorDeposito;
    console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
  }
  
  function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {
    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
      saldoOrigem -= valorTransferencia;
      saldoDestino += valorTransferencia;
      console.log("Transferência realizada com sucesso");
    } else if (valorTransferencia > saldoOrigem) {
      console.log("Saldo insuficiente para transferência");
    } else {
      console.log("Valor excede o limite de transferência");
    }
  }
  
  function checarChequeEspecial(saldo) {
    if (saldo < 0) {
      console.log("Dentro do limite do cheque especial");
    } else {
      console.log("Fora do limite do cheque especial");
    }
  }
  
  function atualizarCadastro(cadastroAtivo, saldo) {
    if (cadastroAtivo) {
      if (saldo > 0) {
        console.log("Cadastro ativo e saldo positivo");
      } else {
        console.log("Cadastro ativo mas precisa regularizar saldo");
      }
    } else {
      console.log("Por favor, atualize seu cadastro");
    }
  }
  
  function avaliarCredito(saldo, historicoCredito, rendaMensal) {
    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
      console.log("Crédito aprovado");
    } else {
      console.log("Crédito negado");
    }
  }
  
  function menu() {
    console.log("Bem-vindo ao Banco XYZ!");
    console.log("Escolha uma opção:");
    console.log("1. Verificar Saldo");
    console.log("2. Realizar Saque");
    console.log("3. Realizar Depósito");
    console.log("4. Transferência Entre Contas");
    console.log("5. Checar Cheque Especial");
    console.log("6. Atualizar Cadastro");
    console.log("7. Avaliar Crédito");
    console.log("0. Sair");
  
    let opcao = parseInt(prompt("Digite o número da opção desejada:"));
  
    switch (opcao) {
      case 1:
        let saldo = parseFloat(prompt("Digite o saldo:"));
        verificarSaldo(saldo);
        break;
      case 2:
        let saldoAtualSaque = parseFloat(prompt("Digite o saldo atual:"));
        let valorSaque = parseFloat(prompt("Digite o valor do saque:"));
        realizarSaque(saldoAtualSaque, valorSaque);
        break;
      case 3:
        let saldoAtualDeposito = parseFloat(prompt("Digite o saldo atual:"));
        let valorDeposito = parseFloat(prompt("Digite o valor do depósito:"));
        realizarDeposito(saldoAtualDeposito, valorDeposito);
        break;
      case 4:
        let saldoOrigem = parseFloat(prompt("Digite o saldo da conta de origem:"));
        let saldoDestino = parseFloat(prompt("Digite o saldo da conta de destino:"));
        let valorTransferencia = parseFloat(prompt("Digite o valor da transferência:"));
        let limiteTransferencia = parseFloat(prompt("Digite o limite de transferência:"));
        realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia);
        break;
      case 5:
        let saldoChequeEspecial = parseFloat(prompt("Digite o saldo:"));
        checarChequeEspecial(saldoChequeEspecial);
        break;
      case 6:
        let cadastroAtivo = prompt("O cadastro está ativo? (s/n)").toLowerCase() === 's';
        let saldoCadastro = parseFloat(prompt("Digite o saldo:"));
        atualizarCadastro(cadastroAtivo, saldoCadastro);
        break;
      case 7:
        let saldoCredito = parseFloat(prompt("Digite o saldo:"));
        let historicoCredito = prompt("O histórico de crédito é bom? (s/n)").toLowerCase() === 's';
        let rendaMensal = parseFloat(prompt("Digite a renda mensal:"));
        avaliarCredito(saldoCredito, historicoCredito, rendaMensal);
        break;
      case 0:
        console.log("Obrigado por utilizar nossos serviços. Volte sempre!");
        return;
      default:
        console.log("Opção inválida. Por favor, escolha uma opção válida.");
        break;
    }
  
    menu();
  }
  
  menu();
  