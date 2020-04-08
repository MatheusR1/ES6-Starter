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