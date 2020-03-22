function nome(){
    const nome =document.getElementById("nome").value;
    document.getElementById("ola").innerHTML = "Olá " + nome + ". Deseja jogar?"
 
}
function sim(){
    document.getElementById("sim").style.display="none";
    document.getElementById("resposta").innerHTML= "Escolha um tema."
}
function nao(){
    document.getElementById("nao").style.display="none";
    document.getElementById("resposta").innerHTML= "Até logo!"
}
function desenho(){
    var perg1 = prompt ("Qual o nome da namorada do Mickey? \n Escolha o numero da sua resposta. \n 1. Pateta \n 2.Minnie \n 3.Margarida");
    var perg2 = prompt ("Quem era o dono do cofre de moedas de ouro? \n Escolha o numero da sua resposta. \n 1. Tio Patinha \n 2.Pluto \n 3.Huguinho");
    var perg3 = prompt ("Quem tem medo de água? \n Escolha o numero da sua resposta. \n 1. Monica \n 2.Anjinho \n 3.Cascão");
}
function comida(){
    var perg1 = prompt ("Qual dessas é uma PANC ( Plantas Alimenticias Não Convencionais? \n Escolha o numero da sua resposta. \n 1. Ora-pro-nobis \n 2.Aipim \n 3.Feijão");
    var perg2 = prompt ("Qual dessas não é uma raiz? \n Escolha o numero da sua resposta. \n 1. Batata \n 2.Aipim \n 3.uva");
    var perg3 = prompt ("Qual desses é não é derivado de leite? \n Escolha o numero da sua resposta. \n 1. Queijo \n 2.Presunto \n 3.Requeijão");
}