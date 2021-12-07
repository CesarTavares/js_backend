// parâmetros de função

// console.log(soma(2, 2));
// console.log(soma(25, 25));
// console.log(soma(30, 20));
// console.log(soma(40, 10));

//parâmetros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(59, "Cesar"));

function soma(num1, num2) {
    return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));
console.log(multiplica(soma(4, 5)));


function comParametro(param) {
    console.log(param)
}
comParametro()