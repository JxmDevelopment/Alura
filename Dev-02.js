
// Dentro da função da loop o tempo todo
function Chutar()
{
  var numeroSecreto = parseInt(Math.random() * 10) // Temporario apenas randomizar
  var resultado = document.getElementById("resul") 
  var chute = parseInt(document.getElementById("valor").value)
  if (chute == numeroSecreto)
  {
    resultado.innerHTML = "Você Acertou"
  }
  else if (isNaN(chute) || (chute < 0 || chute > 10))
  {
    resultado.innerHTML = ("Digite um número de 0 a 10")
  }
  else
  {
    resultado.innerHTML = "Você Errou o numero secreto era " + numeroSecreto;
  }
}