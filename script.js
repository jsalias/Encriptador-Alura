

const inputresultado = document.querySelector("#area-resultado");
const inputMensaje = document.querySelector("#area-texto");
const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#copiar");
const botonEscuchar = document.querySelector("#escuchar");


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;




function encriptar(){
        
        var mensaje = inputMensaje.value.toLowerCase();
        var mensajeEncriptado = mensaje
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("a", "ai")
        .replaceAll("u", "ufat");   
        
        document.getElementById("noResuelto").style.visibility = "hidden";
        document.getElementById("copiar").style.visibility = "visible";
        document.getElementById("escuchar").style.visibility = "visible";
        inputresultado.value = mensajeEncriptado;

       /* document.getElementById("inputresultado").value= '';*/
        
  }
  function desencriptar(){
   
    var mensajeEncriptado = inputMensaje.value.toLowerCase();
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")   
    .replaceAll("ufat", "u");

    document.getElementById("noResuelto").style.visibility = "hidden";
    document.getElementById("copiar").style.visibility = "visible";
    document.getElementById("escuchar").style.visibility = "visible";
  
    inputresultado.value = mensaje;
    /*document.getElementById("inputresultado").value= '';*/
  
}

function copiar(){
    var mensajeEncriptado = inputresultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}


escuchar.addEventListener('click',()=>{
    leerTexto(inputresultado.value);
});


function leerTexto(inputresultado){

    const speech = new SpeechSynthesisUtterance();
    speech.text = inputresultado;
    speech.volume =2;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}

   







   


   








