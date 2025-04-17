

import { basico } from "./bandeiras.js";


const bandeira = document.getElementById("flagImage");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const streak = document.getElementById("streak");

let flagAtual = {};

function carregarBandeira() {
   answer.value = "";
   feedback.style.display = "none"; // Esconde o feedback
   feedback.textContent = "";
   answer.disabled = false;
   // answer.focus();

   flagAtual = basico[Math.floor(Math.random() * basico.length)]; // math.random retorna entre 0 e 1, multiplico pelo tamanho do array para percorrer por inteiro, depois arredondo para baixo com math.floor para deixar um numero inteiro 
   bandeira.src = flagAtual.imagem;
}

function verificarResposta() {

   

   if(answer.value.trim().toLowerCase() === flagAtual.pais.toLowerCase()) {
      feedback.style.display = "block"; // Mostra o feedback
      feedback.style.backgroundColor = "green"; 
      feedback.style.color = "white"
      feedback.textContent = "Correto!";
      streak.textContent = parseInt(streak.textContent) + 1;
   } else {
      feedback.style.display = "block"; 
      feedback.style.backgroundColor = "red"; 
      feedback.style.color = "white";
      feedback.textContent = `Incorreto! A resposta era "${flagAtual.pais}"`;
      streak.textContent = 0;

   }
}

submit.addEventListener("click", function() {
   verificarResposta();
   answer.disabled = true;
   setTimeout(carregarBandeira, 2000); // 2 segundos para carregar

})

answer.addEventListener("keydown", function(event) {
   if(event.key === "Enter") {
      verificarResposta();
      answer.disabled = true;
      setTimeout(carregarBandeira, 2000);
   }
});

console.log(Math.random())
document.addEventListener("DOMContentLoaded", carregarBandeira);
