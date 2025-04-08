

import { bandeiras } from "./bandeiras.js";


const bandeira = document.getElementById("flagImage");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");

let flagAtual = {};

function carregarBandeira() {
   answer.value = "";
   feedback.style.display = "none"; // Esconde o feedback
   feedback.textContent = "";
   answer.focus();

   flagAtual = bandeiras[Math.floor(Math.random() * bandeiras.length)]; // math.random retorna entre 0 e 1, multiplico pelo tamanho do array para percorrer por inteiro, depois arredondo para baixo com math.floor para deixar um numero inteiro
   bandeira.src = flagAtual.imagem;
}

function verificarResposta() {
   if(answer.value.toLowerCase() === flagAtual.pais.toLowerCase()) {
      feedback.style.display = "block"; // Mostra o feedback
      feedback.style.backgroundColor = "green"; 
      feedback.style.color = "white"
      feedback.textContent = "Correto!";
   } else {
      feedback.style.display = "block"; 
      feedback.style.backgroundColor = "red"; 
      feedback.style.color = "white";
      feedback.textContent = `Incorreto! A bandeira é do ${flagAtual.pais}`;

   }
}

submit.addEventListener("click", function() {
   verificarResposta();
   setTimeout(carregarBandeira, 2000); // 2 segundos para carregar

})

answer.addEventListener("keydown", function(event) {
   if(event.key === "Enter") {
      verificarResposta();
      setTimeout(carregarBandeira, 2000); 
   }
});

console.log(Math.random())
document.addEventListener("DOMContentLoaded", carregarBandeira);
