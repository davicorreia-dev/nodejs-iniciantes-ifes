class Celular {
    marca: string;
    modelo: string;
    preco: number;

    constructor (marca: string, modelo: string, preco: number){
        this.marca = marca;
        this.modelo = modelo;
        this.preco = preco;
    }
}

class Pessoa {
    private _nome: string;
    private _sobrenome: string;
    private _idade: number;
    
    constructor (_nome: string,_sobrenome: string, _idade: number){
        this._nome = _nome;
        this._sobrenome = _sobrenome;
        this._idade = _idade;
        
    }

    public get getIdade() : number{
        return this._idade;
    }

    public set setIdade(valor: number){
        if (valor <= 0 || valor >= 150){
            throw new Error('Idade inválida');
        }
        this._idade = valor;
    }

    public getNomeCompleto(): string {
        return `${this._nome} ${this._sobrenome}`;
    }
}

class Empregado extends Pessoa{
    private _email: string;

    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        email: string
    ) {
        super(nome, sobrenome, idade);
        this._email = email;
    }
}

interface IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

class Gerente implements IPessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(
        nome: string,
        sobrenome: string,
        idade: number
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    converterParaJSON(): string {
        return JSON.stringify(this);
    }
}

const gerenteDinamico: IPessoa = {
    nome: 'Cris',
    sobrenome: 'Correia',
    idade: 50
};

enum DiaDaSemana{
    DOMINGO = 'Domingo',
    SEGUNDA = 2,
    TERCA = 3,
    QUARTA = 4,
    QUINTA = 5, 
    SEXTA = 6,
    SABADO = 7
}

//const pessoa = new Pessoa('Caio', 'Chapolin', 6);
//console.log(pessoa.getIdade);
//console.log(pessoa.getNomeCompleto());
//pessoa.setIdade = 7;
//console.log(pessoa.getIdade);

//console.log(gerenteDinamico.nome);

console.log(DiaDaSemana.SABADO);
console.log(DiaDaSemana.DOMINGO);