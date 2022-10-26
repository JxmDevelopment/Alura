var listaFilmes = 
[
  "https://vizer.tv/content/movies/posterPt/185/23980.jpg",
  "https://vizer.tv/content/movies/posterPt/185/13903.jpg",
  "https://vizer.tv/content/movies/posterPt/185/13754.jpg",
]

var linksFilmes = 
[
"https://858139431.tapecontent.net/radosgw/RkRl7Zk3Lmi7oV/BS5DZWUBO3GgYxHY2hqM_qPBJdMsn5kjTFmzJoVal73VFNMf2r2h2_IL1CNl4lWUV8U8R7j7QcjIBD8jIP1oK65jm-NYkNeMG7xkDPziQZWzZxQOd3OwC_paUv8tH062MW_PBug_wQVm9q-aKIg0RRJrdlK-R2vdEUzFkjcNmPEI9ldESRMg-WqpMW7WwOWqUKw9_Vu3Mwsf5ZkmYtXhqpHZCx9SEU7TPNtdiBjvNQSU2uRLZ731FOf8RUUfGh6nZUOp5GDy0kXcATQaj5Xz4R7iiwCZhqY6J6bqnQ/icJQvNvl2tqcXcax.mp4",
"https://861480982.tapecontent.net/radosgw/gvmQkvX7gwuBwR/flApE7fowwWrzSE25_TB_yEair74iVfzquHGBeK1g5BkjXalntIuVUDvzqRawpaYZRLhEyk-36Nbcl48bB2QQxQW6kLCrASYl53k4eLOPBjFMh0G60jz-I0wxC3jl4Bz8muR3zFe_3rLc_DSxnOaGwqcjgpTFMVtWSbDvP2-J_Ls46bvAQg9HxkEdK_O60p9qa9Br5JniBkmuPF4C6RXuPslW49GVbs-8KQYx20ENyo1BFmE-meAH12UFhQ24SH6ymcYl3vSsq6wWzD4tmMR9mozdVEe-HxStl3nYA/P7gt3euwqdyiHbup.mp4",
"https://908357361.tapecontent.net/radosgw/oQdGQQvdZ8uJ2Gj/qIOeH4zpgokr3KRTm_JQF_O3f2R9O9tnGbLdrxStt4L97VeeetCZA4UKwucl0VUh14hOLe_ztquGQx18CasVj_7Mp4hKAyxenUUhx1f6ey3frAds-H-1hFwZxRCCtfU6p_I37_9P-UgRO6mRfyLw9aZWNL8rbPqqy0b-ZupMyZKAm3TOIJGQknuuTosydTIHnvO58qWg-BozXooEqtp5BHmGQLSWuyrqDyT13-tS0z1PCQNwmcJutVg750n3Oxh_bsc2igXpvMeeDQfHsEuW5HPszxeiTF_x1oOqMg/XTQxOo52mKUXwz1k.mp4",
]

var nomesFilmes = 
[
"Perseguição 1: A Estrada da Morte",
"Perseguição 2: O Resgate",
"Perseguição 3: Correndo Para a Morte",
]

for(var i = 0; i < listaFilmes.length; i++)
  {
    document.write('<img src=' + listaFilmes[i] + ' target="_blank">' + '<a href=' + linksFilmes[i] + '>')
    document.write('<p>' + nomesFilmes[i] + '</p>')
  }