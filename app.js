function olamundo() {
  console.log("Olá, mundo!");
  alert("Olá, mundo!");
}

function olanome() {
  let nome = document.getElementById("nome").value;
  console.log(`Olá, ${nome}!`);
  alert(`Olá, ${nome}!`);
}

function dobronumero() {
  let valor = document.getElementById("numdobro").value;
  let resultado = valor * 2;
  console.log(`O resultado é: ${resultado}!`);
  alert(`O resultado é: ${resultado}!`);
}

function media() {
  let valor1 = parseFloat(document.getElementById("num1media").value);
  let valor2 = parseFloat(document.getElementById("num2media").value);
  let valor3 = parseFloat(document.getElementById("num3media").value);
  let resultado = (valor1 + valor2 + valor3) / 3;
  console.log(`O resultado é: ${resultado}!`);
  alert(`O resultado é: ${resultado}!`);
}

function maiornumero() {
  let valor1 = parseFloat(document.getElementById("num1maior").value);
  let valor2 = parseFloat(document.getElementById("num2maior").value);
  let resultado = 0;
  if (valor1 == valor2) {
    resultado = "Os números são iguais!";
  } else {
    resultado =
      num1maior > num2maior
        ? "O número maior é o " + valor1
        : "O número maior é o " + valor2;
  }
  console.log(resultado);
  alert(resultado);
}

function multiplicar() {
  let valor = parseFloat(document.getElementById("nummultp").value);
  let resultado = 0;
  if (valor <= 0) {
    resultado = "Insira um número maior que 0!";
  } else {
    resultado = valor * valor;
  }
  console.log(resultado);
  alert(resultado);
}
