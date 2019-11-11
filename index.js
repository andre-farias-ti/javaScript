window.onload = function abas (){

    //var objDiv = document.getElementById('teste');
    //objDiv.style.color= 'red';
}

var teste;

function validar01(){
    
    if(window.event.srcElement.value == teste){
        alert("Valores repetidos não é prmitido!");
    }
    
    teste = window.event.srcElement.value;
}

function validar02(){
    
    if(window.event.srcElement.value == teste){
        alert("Valores repetidos não é prmitido!");
        teste = window.event.srcElement.value;
    }

    teste = window.event.srcElement.value;
}