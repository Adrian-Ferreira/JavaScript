function realizarBusca() {

    var cep = document.getElementById("meucep").value;
    console.log("Digitei o CEP = " + cep);

    var URL = "https://jsonplaceholder.typicode.com/users/" + cep;
    console.log("Montei a URL");
    console.log(URL);

    fetch(URL, { method: "GET" })
        .then(response => response.json())
        .then(json => preencheHTML(json));

}

function preencheHTML(json) {
    document.getElementById("result").innerHTML = "";
    var result = document.getElementById("result");
    //result.innerHTML += JSON.stringify(json);
    result.innerHTML += "<h3>PESSOA</h3><br/><hr>"
    result.innerHTML += "Nome: "+ json.name+"<br/>";
    result.innerHTML += "Usuario: "+json.username +"<br/>";
    result.innerHTML += "Email: "+json.email+"<br/>";
    result.innerHTML += "Rua: "+json.address.street+"<br/>";
    result.innerHTML += "Contato: "+json.phone+"<br/>";
    result.innerHTML += "Site: "+json.website+"<br/>";
    result.innerHTML += "Empresa: "+json.company.name+"<br/>";
    result.innerHTML += "Empresa: "+json.company.catchPhrase+"<br/>";
    result.innerHTML += "Empresa: "+json.company.bs+"<br/>";


}