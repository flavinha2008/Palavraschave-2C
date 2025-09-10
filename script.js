import {PALAVRAS_RUINS} from "./palavrasruins.js";

const botaoMostraPalavras = document.querySelector('#botao-PalavraChave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave () {
     const texto = document.querySelector ('#entrada-de-texto'). value;
     const campoResultado = document.querySelector ('#resultado-palavrachave');
     const PalavrasChave = processaTexto (texto);

     campoResultado.textContent = palavrasChave.join(",")
     
}