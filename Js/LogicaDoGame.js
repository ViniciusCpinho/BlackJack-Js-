

var playerTemAs = false, dealerTemAS = false; var iniciarJogo = false;
var cartaPlayer1 = 0; var cartaPlayer2 = 0; var cartaPlayer3 = 0;
var cartaDealer1 = 0; var cartaDealer2 = 0; var cartaDealer3 = 0;
var Soma = 0;
var totalPlayer = 0; var totalDealer = 0;



function Main()
{   
    cartaPlayer1 = darCartas();
    cartaPlayer2 = darCartas();
    cartaPlayer3 = darCartas();

    cartaDealer1 = darCartas();
    cartaDealer2 = darCartas();
    cartaDealer3 = darCartas();
    
    var cartaP1 = document.getElementById("cartaP1").src = "Imagens/imagem" + cartaPlayer1 + ".png"
    var cartaP2 = document.getElementById("cartaP2").src = "Imagens/imagem" + cartaPlayer2 + ".png"
    var cartaP3 = document.getElementById("cartaP3").src = "Imagens/imagem" + 53 + ".png"

    var cartaD1 = document.getElementById("cartaD1").src = "Imagens/imagem" + cartaDealer1 + ".png"
    var cartaD2 = document.getElementById("cartaD2").src = "Imagens/imagem" + cartaDealer2 + ".png"
    var cartaD3 = document.getElementById("cartaD3").src = "Imagens/imagem" + 53 + ".png"

    totalPlayer = Valor(cartaPlayer1) + Valor(cartaPlayer2);
    totalDealer = Valor(cartaDealer1) + Valor(cartaDealer2);

    temAs();    
    temAsMaior21();

    var botaoDesistir = document.getElementById("desistir");
    botaoDesistir.classList.remove("off")
    botaoDesistir.classList.add("botoesdecisoes")    

    var botaoContinuar = document.getElementById("continuar");
    botaoContinuar.classList.remove("off")
    botaoContinuar.classList.add("botoesdecisoes") 
    
    var reiniciar = document.getElementById("reiniciar");
    reiniciar.classList.remove("off")
    reiniciar.classList.add("botoesdecisoes")

    


};

function darCartas()
{
    var index = Math.floor(Math.random() * 52)
    return index;
}

function Valor(cartaJogador)
{
    Soma = cartas[cartaJogador][1]
    return Soma;
}

function temAs()
{
    if(cartas[cartaPlayer1][1] == 11 || cartas[cartaPlayer2][1] == 11)
    {
        playerTemAs = true;
    }

    if(cartas[cartaDealer1][1] == 11 || cartas[cartaDealer2][1] == 11)
    {
        dealerTemAS = true;
    }
}

function temAsMaior21()
{
    if((playerTemAs == true) && totalPlayer > 21)
    {
        totalPlayer = totalPlayer - 10;
    }

    if((dealerTemAS == true) && totalDealer > 21)
    {
        totalDealer = totalDealer - 10
    }
}

function ganhou()
{
    if(totalDealer == 21)
    {
        alert("A mesa ganhou");
    }
    if((totalPlayer > 21) && (totalDealer > 21))
    {
        alert("Empate")
    }
    else if(totalPlayer > 21)
    {
        alert("A Mesa ganhou")
    }
    else if(totalDealer > 21)
    {
        alert("O player ganhou")
    }
    else if((totalPlayer > totalDealer) && totalPlayer <= 21)
    {
        alert("O player ganhou!")
    }
    
    else if((totalDealer > totalPlayer) && totalDealer <= 21)
    {
        alert("A Mesa ganhou!")
    }

    else if(totalDealer == totalPlayer)
    {
        alert("empate")
    }

    
}
