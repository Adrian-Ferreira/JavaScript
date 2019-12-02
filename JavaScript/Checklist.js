var I = 1;  
function inserirNovo(){

var xuxa= document.getElementById("xuxa").value;
console.log (xuxa)

var lego= "<div class='input-group-prepend'><div class='input-group-text'>  <input type='checkbox' aria-label='Checkbox for following text input'></div></div><div>"+xuxa+"</div><div>"+I+"</div>";
I++;

document.getElementById("felipe").innerHTML += lego;
                                                                        
}