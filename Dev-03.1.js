var nomesFilmes = ["Olhos Famintos 1", "Olhos Famintos 2", "Olhos Famintos 3", "Olhos Famintos 4"]

var listaFilmes = ["https://2.bp.blogspot.com/-aEk71UA3nCg/WMu-eBc8xOI/AAAAAAAAveg/xE0BF9-dl8gTbm0pO8ICt1K9sWzv4QubgCLcB/s1600/tem%2Bcomo%2Bnao%2Bse%2Bapaixonar%2Bpor%2Besse%2Brostinho.jpg", "https://i.ytimg.com/vi/T_mbqsatg0M/maxresdefault.jpg", "https://i.ytimg.com/vi/Ncd_1fFpKVI/maxresdefault.jpg", "https://trilhadomedo.com/wp-content/uploads/2021/02/jeepers-creepers-reborn.jpg"]

for(var qtde = 0; qtde < listaFilmes.length; qtde++)
  {
    document.write("<img src=" + listaFilmes[qtde] + ">")
    document.write("<p>" + nomesFilmes[qtde] + "</p>")
 // document.write('<img src=' + listaFilmes[i] + ' target="_blank">'    +    '<a href=' + linksFilmes[i] + '>')
  }