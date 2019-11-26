var salMin = prompt("Digite o valor so salario Minimo");
var qtdekw = prompt("Digite a quantidade de kw");

var valor1kw = salMin / 700;
var valorTotal = valor1kw * qtdekw
var valorDesc = valorTotal * 0.9;

document.write("Valor de 1 kw: R$ "+valor1kw+"</br>");
document.write("Valor total da conta: R$"+valorTotal+"</br>");
document.write("Valor com 10% de desconto: R%"+valorDesc+"</br>");

console.log("Valor de 1 kw: R$ "+valor1kw);
console.log("Valor total da conta: R$"+valorTotal);
console.log("Valor com 10% de desconto: R%"+valorDesc);

alert("Valor de 1 kw: R$ "+valorTotal);
alert("Valor total da conta: R$"+valorTotal);
alert("Valor com 10% de desconto: R%"+valorTotal);