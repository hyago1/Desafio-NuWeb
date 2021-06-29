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
}
