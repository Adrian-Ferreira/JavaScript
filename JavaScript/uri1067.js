var LIMITE=prompt("Digite o valor maximo");
var strHTML="";
var nLinha=0;
for (i=1;i<=LIMITE;i++){
    if (i % 2 != 0){
        var cssLinha = "linha_"+nLinha;
        strHTML += "<div class='row " +cssLinha+ "'> ";
        strHTML += "   <div class='col-md-12'> "+i+"</div>";
        strHTML += "</div>";
        nLinha = (nLinha+1); 
        if (nLinha == 3){
            nLinha = 0;
        }
    }
}
document.getElementById("conteudo").innerHTML = strHTML;