function nome(){
    const nome =document.getElementById("nome").value;
    document.getElementById("nome").style.display="none";
    document.getElementById("botao").style.display="none";
    document.getElementById("ola").innerHTML = "Olá " + nome + ". Você deseja jogar?";
    document.getElementById("jogo").style.display="block";
    document.getElementById("in").style.display="none";
}
function sim(){
    document.getElementById("sim").style.display="none";
    document.getElementById("nao").style.display="none";
    document.getElementById("resposta").innerHTML= "Escolha um tema.";
    document.getElementById("tema1").style.display="none";
    document.getElementById("tema").style.display="block";
    document.getElementById("ola").style.display="none";
    document.getElementById("tema2").style.display="none"
}
function nao(){
    document.getElementById("nao").style.display="none";
    document.getElementById("sim").style.display="none";
    document.getElementById("resposta").innerHTML= "Até logo!"
    window.close();
}
function desenho(){
    document.getElementById("comida").style.display="none";
    document.getElementById("desenho").style.display="none";
    document.getElementById("tema1").style.display="block";
    document.getElementById("resposta").style.display="none";
}  
function comida(){
    document.getElementById("comida").style.display="none";
    document.getElementById("desenho").style.display="none";
    document.getElementById("tema2").style.display="block";
    document.getElementById("resposta").style.display="none";
}
function env1(){
    document.getElementById("tema1").style.display="none";
    document.getElementById("recomeçar").style.display="block";
    document.getElementById("final").style.display="block";
    //document.getElementById("1").innerHTML= Resposta 1;
    //document.getElementById("2").innerHTML= Resposta 1;
    //document.getElementById("3").innerHTML= Resposta 1;
}  
function env2(){
  document.getElementById("tema2").style.display="none";
  document.getElementById("recomeçar").style.display="block";
  document.getElementById("final").style.display="block";

}
function jogar(){
    document.getElementById("joga").innerHTML= "Escolha um tema.";
    document.getElementById("jn").style.display="none";
    document.getElementById("sair").style.display="none";
    document.getElementById("final").style.display="none";
    document.getElementById("tema").style.display="block";
   
}
function sair(){
  window.close();
}
//(if https://www.tutorialspoint.com/css/css_text-decoration.htm(resp1== c1){
  //  document.getElementById('1').innerHTML= "Resposta 1"
//} else {
  //  document.getElementById('4').innerHTML= "Resposta 1";
//} 
//if (perg2 == 1){
  //  document.getElementById('r2').innerHTML= "Resposta 2"
//} else {
  //  document.getElementById('e2').innerHTML= "Resposta 2";
//} 
//if (perg3 == 3){
  //  document.getElementById('r3').innerHTML= "Resposta 3"
//} else {
  //  document.getElementById('e3').innerHTML= "Resposta 3";
//} )
