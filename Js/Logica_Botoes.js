
var botaoIniciarJogo = document.getElementById("iniciarJogo");
var player = document.getElementById("cartaNaMesa");

botaoIniciarJogo.addEventListener("click", function()
{
   if(botaoIniciarJogo.style.display != "none")
   {
   botaoIniciarJogo.style.display = "none";
   player.style.display = "block"
   }
   
   Main();
});

var botaoDesistir = document.getElementById("desistir");
botaoDesistir.addEventListener("click", function()
{   
    esconderBotoes();
    ganhou();
    mostrarReiniciar();
    
})

var botaoContinuar = document.getElementById("continuar");
botaoContinuar.addEventListener("click", function()
{
    var cartaP3 = document.getElementById("cartaP3").src = "Imagens/imagem" + cartaPlayer3 + ".png"

    totalPlayer = totalPlayer + Valor(cartaPlayer3);

    if(totalDealer < 15)
    {
        var cartaD3 = document.getElementById("cartaD3").src = "Imagens/imagem" + cartaDealer3 + ".png"
        totalDealer = totalDealer + Valor(cartaDealer3);
    }

    esconderBotoes();
    ganhou();
    mostrarReiniciar();

})


var reiniciar = document.getElementById("reiniciar");
reiniciar.addEventListener("click", function()
{
    if(reiniciar.style.display != "none")
    {
        reiniciar.classList.remove("botoesdecisoes")
        reiniciar.classList.add("off")
    }

    Main();
})


function esconderBotoes()
{
    if(botaoContinuar.style.display != "none")
    {
        botaoContinuar.classList.remove("botoesdecisoes")
        botaoContinuar.classList.add("off")
    }

    if(botaoDesistir.style.display != "none")
    {
        botaoDesistir.classList.remove("botoesdecisoes")
        botaoDesistir.classList.add("off")
    }
}

function mostrarReiniciar()
{
    if(reiniciar.style.display == "none")
    {
        reiniciar.classList.remove("off")
        reiniciar.classList.add("botoesdecisoes")
    }
}