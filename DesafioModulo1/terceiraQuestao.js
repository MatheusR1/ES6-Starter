// 3

// 3.1
const arr = [1, 2, 3, 4, 5];

const array1 = arr.map(item => item + 10)
console.log(array1);
// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario))
    // 3.34
    // Dica: Utilize uma constante pra function
const nome = "Diego";
4
const idade = 23;


const mostraUsuario = () => {
    return { nome, idade };
}
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4


// const promise = () => {
//     return new Promise(function(resolve, reject) {
//         return resolve();
//     })
// }

const promise = () => new Promise((resolve, reject) => resolve());

console.log(promise())