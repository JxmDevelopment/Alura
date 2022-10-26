var linksFilmes = 
[
"https://www.youtube.com/watch?v=R2BN5saMtug",
"https://www.youtube.com/watch?v=aKflKuTb0c8",
"https://www.youtube.com/watch?v=NWFBsLWSnR4",
"https://www.youtube.com/watch?v=6wYBitwkxZk",
]

var listaFilmes = 
[
  "https://vizer.tv/content/movies/posterPt/185/14172.jpg",
  "https://vizer.tv/content/movies/posterPt/185/22651.jpg",
  "https://vizer.tv/content/movies/posterPt/185/24360.jpg",
  "https://vizer.tv/content/movies/posterPt/185/38664.jpg",
]

for(var i = 0; i < listaFilmes.length; i++)
  {
    document.write('<a href=' + linksFilmes[i] + '>' + '<img src=' + listaFilmes[i] + ' target="_blank">')
 // document.write('<img src=' + listaFilmes[i] + ' target="_blank">' + '<a href=' + linksFilmes[i] + '>')  AUCONTRARIO DA ERRO ?!
  }