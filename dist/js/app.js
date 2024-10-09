import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
const lista = [];
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
