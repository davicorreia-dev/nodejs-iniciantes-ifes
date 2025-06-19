let nome: string = 'Davi';
let sobrenome: string = 'Correia';

let nomeCompleto: string = nome.concat(" ").concat(sobrenome);
console.log(nomeCompleto);

console.log(nomeCompleto.length);

console.log(nomeCompleto.toLocaleUpperCase());
//Saída: "DAVI CORREIA"

console.log(nomeCompleto.toLocaleLowerCase());
//Saída: "davi correia"