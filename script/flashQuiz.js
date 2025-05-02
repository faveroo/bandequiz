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
    bandeira.style.display = "flex";
    answer.disabled = false;
    // answer.focus();


    
    flagAtual = basico[Math.floor(Math.random() * basico.length)];
    

    bandeira.src = flagAtual.imagem;

    setTimeout( () => {
        bandeira.src = " "
    bandeira.alt = " "
    bandeira.style.display = "none"; // Esconde a bandeira
    }, 150)
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
    setTimeout(carregarBandeira, 2000);
 
 })
 
 answer.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
       verificarResposta();
       answer.disabled = true;
       setTimeout(carregarBandeira, 2000);
    }
 });

document.addEventListener("DOMContentLoaded", carregarBandeira);
