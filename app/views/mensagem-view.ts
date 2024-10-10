import { View } from "./view.js";

export class MensaegemView extends View{

    template( model: string ): string {
        return `
            <p class="alert alert-info"> ${model} </p>
        `;
    }
}