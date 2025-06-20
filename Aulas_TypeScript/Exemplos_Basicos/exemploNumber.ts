let qt:number = 3;
let preco:number = 49.99;

let valor = `Preço: ${preco}. Quantidade: ${qt} `;
console.log(valor);

let precototal = `Preço total: $${(qt * preco).toFixed(2)}`;
console.log(precototal);