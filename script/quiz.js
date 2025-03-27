const bandeiras = [
   {pais: "Brasil", imagem: "./assets/svg/br.svg"}
];

const bandeira = document.getElementById("flagImage");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");

let flagAtual = {};

function carregarBandeira() {
   answer.value = "";
   feedback.textContent = "";
   answer.focus();

   flagAtual = bandeiras[Math.floor(Math.random() * bandeiras.length)]; // math.random retorna entre 0 e 1, multiplico pelo tamanho do array para percorrer por inteiro, depois arredondo para baixo com math.floor para deixar um numero inteiro
   bandeira.src = flagAtual.imagem;
}

console.log(Math.random())
document.addEventListener("DOMContentLoaded", carregarBandeira);
