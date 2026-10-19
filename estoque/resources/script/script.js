let produtos = [
    "Album",
    "Lightstick",
    "Photocard",
    "Poster",
    "Chaveiro",
    "Mochila",
    "Camiseta",
    "Caneca",
    "Adesivo",
    "Pulseira"
];
// cadastrar um novo produto
// let novo = prompt("qual produto deseja cadastrar?");
// produtos.push(novo);
// procurar um produto
let procurar = prompt("qual produto deseja procurar?");

if (produtos.includes(procurar)) {
    console.log("produto encontrado");
} else {
    console.log("produto não encontrado");
}
// filtrar produtos com mais de 5 letras
let filtrados = produtos.filter(produto => produto.length > 5);

// mostrar as listas
console.log("todos os produtos:", produtos);
console.log("produtos filtrados:", filtrados);