import { View } from "./view.js";
export class MensaegemView extends View {
    // Está como protected também, igual a classe "mãe" View, porquê a classe filha se não colocar nada, de forma implícita é public. Então a classe filha está mudando um método protected pra public. Por isso que temos que colocar "protected" nas classes filhas também para não ser visto por outro lugares que não poderia ver sem necessidade.
    template(model) {
        return `
            <p class="alert alert-info"> ${model} </p>
        `;
    }
}
