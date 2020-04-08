//1)
// class Usuario {
//     constructor(email, senha) {
//         this.email = email;
//         this.senha = senha;
//     }
//     isAdmin() {
//         return this.admin === true;
//     }
// }

// class Admin extends Usuario {
//     constructor() {
//         super();
//         this.admin = true;
//     }
// }

// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');

// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true

//2)

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// const idade = usuarios.map(item => item.idade)


// const RocketMaior18 = usuarios.filter(item => item.empresa === "Rocketseat" && item.idade > 18)

// const google = usuarios.find(item => item.empresa === "Google")

// const DobrarIdade = usuarios.map(item => item.idade * 2);


// for (const key in usuarios) {
//     usuarios[key].idade = DobrarIdade[key];
// }

const Maior50 = usuarios.map(item => ({...item, idade: item.idade * 2 })).filter(item => item.idade < 50);

// console.log(idade);
// console.log(RocketMaior18)
// console.log(google);
console.log(Maior50)

// 3

// // 3.1
// const arr = [1, 2, 3, 4, 5];

// const array1 = arr.map(item => item + 10)
// console.log(array1);
// // 3.2
// // Dica: Utilize uma constante pra function
// const usuario = { nome: 'Diego', idade: 23 };

// const mostraIdade = usuario => usuario.idade;

// console.log(mostraIdade(usuario))
//     // 3.34
//     // Dica: Utilize uma constante pra function
// const nome = "Diego";
// 4
// const idade = 23;


// const mostraUsuario = () => {
//     return { nome, idade };
// }
// console.log(mostraUsuario(nome, idade));
// console.log(mostraUsuario(nome));

// // 3.4


// // const promise = () => {
// //     return new Promise(function(resolve, reject) {
// //         return resolve();
// //     })
// // }

// const promise = () => new Promise((resolve, reject) => resolve());

// console.log(promise())