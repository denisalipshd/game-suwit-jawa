function getPilihanKomputer() {
  const pilihanKomputer = ["gajah", "semut", "orang"][Math.floor(Math.random() * 3)];
  return pilihanKomputer;
}

function getHasil(pilihanPlayer, pilihanKomputer) {
  return pilihanKomputer === pilihanPlayer
    ? "SERI!"
    : (pilihanKomputer === "gajah" && pilihanPlayer === "orang") || (pilihanKomputer === "semut" && pilihanPlayer === "gajah") || (pilihanKomputer === "orang" && pilihanPlayer === "semut")
    ? "MENANG!"
    : "KALAH!";
}

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgKomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

let skorePemain = 0;
let skoreKomputer = 0;

const skore = document.querySelector(".skore");
skore.textContent = `Score kamu : ${skorePemain} | Score Bot : ${skoreKomputer}`;

const pGambar = document.querySelectorAll("li img");
pGambar.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    putar();

    setTimeout(function () {
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

      if (hasil == "MENANG!") {
        skorePemain++;
      } else if (hasil == "KALAH!") {
        skoreKomputer++;
      }

      skore.textContent = `Score kamu : ${skorePemain} | Score Bot : ${skoreKomputer}`;

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});
