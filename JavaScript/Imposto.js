function calculaImposto() {
    var salario = document.getElementById("salario").value;
    console.log("Slario digitado= "+salario);
    var imposto;

    if(salario < 1000){
        imposto = 0
    }else if (salario >= 1000 && salario < 2500)
    {
        imposto = (salario*12.5)/100;
    }else if (salario >= 2500 && salario < 5000){
        imposto = (salario*25)/100;
    }else if (salario >= 5000){
        imposto = 1300;
    }

        return imposto;
    
    
}
function SalarioL() {
    var salario = document.getElementById("salario").value;
    var imposto = calculaImposto();
    var salarioT = salario - imposto;
    document.getElementById("resultado").innerHTML = "Valor do imposto: "+imposto+"<br/>salario liquido: "+salarioT;



}