let textoInput = document.querySelector("#box-text");
let textoOutput = document.querySelector("#message");
let acentos = /[ÁÀÃÉÍÓÕÚÑáàãéíóõúñ]/;


function criptografar(){
  let texto = textoInput.value;
  if(acentos.test(texto)){
    alert("A mensagem não pode conter acentuação!");
  }
  
  
  let resultadoCripto = texto.toLowerCase()
                             .replace(/e/g, "enter")
                             .replace(/i/g, "imes")
                             .replace(/a/g, "ai")
                             .replace(/o/g, "ober")
                             .replace(/u/g, "ufat");
                             

  document.getElementById("message").innerHTML = '<textarea readonly id="box-text-mensage">' + resultadoCripto + '</textarea>' + '<button class="btn" id="copiar" onclick="copiar()">Copiar</button>'
  
}

function descriptografar(){
  let texto = textoInput.value;
  if(acentos.test(texto)){
    alert("A mensagem não pode conter acentuação!");
  }
  
  let resultadoDescripto = texto.toLowerCase()
                                .replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");

//  document.getElementsByClassName('mensagem').
  document.getElementById("message").innerHTML = '<textarea readonly id="box-text-mensage">' + resultadoDescripto + '</textarea>' + '<button class="btn" id="copiar" onclick="copiar()">Copiar</button>'
  
}

  
function copiar() {
  let textoCop = document.getElementById('box-text-mensage');
  textoCop.select();
          
  document.execCommand('copy');
  alert("Texto copiado");
}