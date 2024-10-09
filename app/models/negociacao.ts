export class Negociacao {
    constructor( 
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor:number
    ) { }

    get volume() {
        return this.quantidade * this.valor;
    }

    //Utilizando pra uma programação defensiva. Onde, se outro desenvolvedor tentar modificar esse valor de data, como por exemplo utilizando "negociacao.data.setDate(12)" onde o desenvolvedor força o dia ser sempre 12, ele não vai conseguir mudar o valor original da data.
    get data(): Date {
        const data = new Date(this._data.getTime());
        return data; 
    }
}