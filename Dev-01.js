
function TrocarImagem()
{
  var tipoMoeda = document.getElementById("moedas").value;
   var imagem = "";
   switch (tipoMoeda) {
     case "dolar":
       imagem = "https://www.guiadacotacao.com.br/assets/images/moeda/dolar.jpg"
       document.getElementById("valorConvertido").innerHTML = ""
       break;
     case "euro":
       imagem = "https://www.leftovercurrency.com/app/uploads/2016/11/50-euros-banknote-first-series-reverse-1.jpg"
       document.getElementById("valorConvertido").innerHTML = ""
       break;
     default:
       console.log()
       break;
   }
   document.getElementById("nota").src = imagem;
}

function ConverterMoedas()
{
  var tipoMoeda = document.getElementById("moedas").value;
  var inserido = document.getElementById("valor").value
  var arredondado = parseFloat(inserido);

  var valorEuro = arredondado / (tipoMoeda === "euro" ? 5.17 : 5.28);

  var tagValorConvertido = document.getElementById("valorConvertido");
  var resultado = `O valor convertido é de: ${tipoMoeda === "euro" ? "€" : "$"} ${valorEuro.toFixed(2)} `;

  if (isNaN(inserido) || inserido <= 0) {
    tagValorConvertido.innerHTML = "Apenas Valores Numéricos E Positivos São Aceitos"
  }
  else {
    tagValorConvertido.innerHTML = resultado;
    document.getElementById("valor").value = ""
  }
}