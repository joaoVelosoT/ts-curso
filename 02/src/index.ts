// type annotations
//string
//number
//boolean

const myString: string = "João";
const myNumber: number = 19;
const myBoolean: boolean = false;

const myVar: any = "teste"; // podendo ser de qualquer tipo

const soma = (a: number, b: number): number => {
  return a + b;
};

// o ? na variavel, significa que ela e opcional, eles precisam ser os ultimos a serem declarados
const welcome = (name: string, gender?: string): string => {
  return `Seja bem vindo ${name} `;
};

console.log(soma(5, 5));
console.log(welcome(myString, "masculino"));

// o ts e inteligente para saber o tipo de cada variavel, se tornando 'opcional' declarar cada variavel
//ex
const exString = "joao";
console.log(exString.toUpperCase());

// funciona em objetos tambem
const user = {
  name: "João",
  age: 19,
};
user.name.toUpperCase();
user.age.toFixed(1);


