var jog1 = {
  nome: "AATROX",
  imagem:
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt570145160dd39dca/5db05fa8347d1c6baa57be25/RiotX_ChampionList_aatrox.jpg",
  atributos: {
    Ataque: 5,
    Defesa: 9,
    Magia: 10
  }
};

var jog2 = {
  nome: "AHRI",
  imagem: "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt1259276b6d1efa78/5db05fa86e8b0c6d038c5ca2/RiotX_ChampionList_ahri.jpg",
  atributos: {
    Ataque: 7,
    Defesa: 8,
    Magia: 6
  }
};

var jog3 = {
  nome: "AKALI",
  imagem:
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt80ff58fe809777ff/5db05fa8adc8656c7d24e7d6/RiotX_ChampionList_akali.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 8,
    Magia: 2
  }
};

var jog4 = {
  nome: "AKSHAN",
  imagem:
    "https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltdd84b33ec501c137/60f9ede33f40e5481e85c0c6/RiotX_ChampionList_akshan_v2.jpg",
  atributos: {
    Ataque: 9,
    Defesa: 8,
    Magia: 2
  }
};

var cartaMaquina;
var cartaJogador;
var cartas = [jog1, jog2, jog3, jog4];
// 0          1           2

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 3);
  while (numeroCartaJogador == numeroCartaMaquina) {
    numeroCartaJogador = parseInt(Math.random() * 3);
  }
  cartaJogador = cartas[numeroCartaJogador];
  console.log(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("texto").innerHTML= "Escolha um atributo:" // Add Texto "Escolha Um Atributo"
  exibirCartaJogador();
}
function obtemAtributoSelecionado() {
  var radioAtributo = document.getElementsByName("atributo");
  for (var i = 0; i < radioAtributo.length; i++) {
    if (radioAtributo[i].checked) {
      return radioAtributo[i].value;
    }
  }
}

function jogar() {
  console.log("chamou");
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if ( cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado] ) 
  {
    document.getElementById("texto").innerHTML= "" // Remove o Texto "Escolha Um Atributo"
    htmlResultado = "<p class='resultado-final'>Venceu</p>";
    document.getElementById("img").innerHTML= "<img src='https://i.giphy.com/media/h8BuVwJybdusJJ5bht/giphy.webp'>"
  }
  else if ( cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado] )
  {
    document.getElementById("texto").innerHTML= "" // Remove o Texto "Escolha Um Atributo"
    htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    document.getElementById("img").innerHTML= "<img src='https://www.pikpng.com/pngl/b/296-2965935_lol-of-league-of-legends-riot-legends-victory.png'>"
  }
  else
  {
    htmlResultado = "<p class='resultado-final'>Empatou</p>";
  }
  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://i.ibb.co/gM04pMJ/af.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var moldura =
    '<img src="https://i.ibb.co/gM04pMJ/af.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p type='text' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
