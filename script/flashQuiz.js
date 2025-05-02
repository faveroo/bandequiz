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
}

function descarregaBandeira() {
    bandeira.src = " "
    bandeira.alt = " "
    bandeira.style.display = "none"; // Esconde a bandeira
}

document.addEventListener("DOMContentLoaded", carregarBandeira);

setTimeout(descarregaBandeira, 200);
