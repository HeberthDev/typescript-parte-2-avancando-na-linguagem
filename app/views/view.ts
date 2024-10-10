export class View {
    protected elemento: HTMLElement;

    constructor( seletor: string ) {
        this.elemento = document.querySelector( seletor );
    }

    template( model: string ): string {
        throw Error( 'Classe filha precisa implementar o método template' );
    }

    update( model: string ): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}