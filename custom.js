/*async function getContent() {
  try {
    const dado = await fetch("https://nuweb.vercel.app/api/NuwebPlay");
    const data = await dado.json();
  } catch (error) {
    console.log("DEU ERRO");
  }

  getContent();
}*/

function dark() {
  const fundo = document.querySelector(".s");
  fundo.classList.add("s-activ");
  const f = document.querySelector(".tituloesub");
  f.classList.add("tituloesub-pp");
  const fe = document.querySelector(".duracao");
  fe.classList.add("duracao-pp");
  const pesquisa = document.querySelector(".pesquisar");
  pesquisa.classList.add("pesquisar-pp");
}

async function clica() {
  try {
    var teste = document.querySelector(".list");
    const request = await fetch("https://nuweb.vercel.app/api/NuwebPlay").then(
      (e) => e.json()
    );

    for (var index = 0; index < 50; index++) {
      teste.innerHTML +=
        '<li id="testzin">' +
        request.items[index].track.album.artists[0].name +
        "</li>";
      // document.getElementById('teste').innerHTML += request.items[index].track.album.artists[0].name;
    }
  } catch (error) {
    console.log(error);
  }
}
window.onload = clica;
async function clica() {
  try {
    var testeq = document.querySelector(".music");
    var teste = document.querySelector(".tituloesub");
    var teste1 = document.querySelector(".sub");
    var teste2 = document.querySelector(".duracao");

    const request = await fetch("https://nuweb.vercel.app/api/NuwebPlay").then(
      (e) => e.json()
    );

    for (var index = 0; index < 50; index++) {
      var imagem = request.items[index].track.album.images[0].url;
      var linkspotify =
        request.items[index].track.album.artists[0].external_urls.spotify;
      var minutes = Math.floor(request.items[index].track.duration_ms / 60000);
      var seconds = (
        (request.items[index].track.duration_ms % 60000) /
        1000
      ).toFixed(0);
      // testeq.innerHTML += '<section class="musics"><ul><img class="image"  src="'+request.items[index].track.album.images[0].url+'"/></ul></section>';
      teste.innerHTML +=
        '<section class="music"><ul><a href="' +
        linkspotify +
        '"><img class="image"  src="' +
        imagem +
        '"/></a></ul><div class="tituloesub"><ul><h4 class="titulo">' +
        request.items[index].track.album.artists[0].name +
        '</h4><h5 class="sub">' +
        request.items[index].track.name +
        "</h5></ul></div></section>";

      teste2.innerHTML +=
        ' </ul><h4 class="tempo">' +
        `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      +"<h4></ul>";
      //teste1.innerHTML +='<div class="tituloesub"><ul></ul></div>';
    }
  } catch (error) {
    console.log(error);
  }
}
