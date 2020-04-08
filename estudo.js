// class list {
//     constructor() {
//         this.data = [];
//     }
//     add(data) {
//         this.data.push(data);
//         console.log(this.data)
//     }
// }



// class Todolist extends list {
//     constructor() {
//         super();
//         this.usuario = "Matheus";
//     }
//     mostrarUsuario() {
//         console.log(this.usuario)
//     }
// }

// const MinhaLista = new Todolist();

// document.getElementById("novotodo").onclick = function() {
//     MinhaLista.add("Novo todo");
// };

// MinhaLista.mostrarUsuario();


// segund aula

// const a = 1;

// //const a = 2 // nao é possivel
// // porem, reatribuição não é possivel;

// // a mutação é possível dentro de uma constante

// const usuario = { nome: "matheus" };

// usuario.nome = "rocha";
// console.log(usuario);

// const arr = [1, 2, 3, 4, 5, 8, 9];
// // mostra o index do vetor
// const newArr = arr.map(function(item, index) {
//     return item * index; // percorre o vetor e mostra uma informação;
// }); // somando a posição e o idex

// console.log(newArr);

// const sum = arr.reduce(function(total, next) {
//     return total + next;
// }); // consome o vetor e transforma em apenas uma variável, 
// //geralmente um numero 
// console.log(sum)

// const filter = arr.filter(function(item) {
//         return item % 2 === 0;
//     }) // retorn treu ou false obrigatoriamente

// console.log(filter)

// const fing = arr.find(function(item) {
//     return item === 4; // n retorna so true ou false, retorna underfind
// });

// array function 

// const arr = [1, 2, 3, 4, 5, 8, 9];


// //REST

// const usuario = {
//     nome: "Matheus",
//     idade: "23",
//     empresa: "Rocketseat"
// };

// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);

// // utilizando arrow function
// function soma(...params) {
//     return params.reduce((total, next) => total + next);
// }

// console.log(soma(1, 2, 3, 4, 5));

// SPREAD
// const objec1 = {
//     nome: "matheus",
//     idade: 23,
//     curso: "rocketSeat"
// }

// const objet2 = {...objec1, curso: "BucetaProçoes" };

// console.log(objet2) // // mudando somente o nome do curso, apartir de um objeto ja existente

// Template Literals

// const nome = "matheus";
// const idade = 23;


// console.log(`meu nome é ${nome} e tenho ${idade} anos .`)