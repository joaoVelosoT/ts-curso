// // interfaces

// usar PascalCase UserExemplo
interface UserWallet {
  coins?: number;
  credits?: number;
}

interface User {
  name: string;
  createdAt: Date;
  wallet?: UserWallet;
}

const createUser = (name: string): User => {
  console.log(name);
  return { name: name, createdAt: new Date() };
};

const updateWallet = (user: User, wallet: UserWallet) => {
    user.wallet = { ...wallet}
};

interface Admin extends User {
    ban(user:User): void;
    kick(user:User): void;
}

const promoteUser = (user:User): Admin => {

    return {
        ...user,
        ban(user) {

        },
        kick(user) {

        },
    }
}

createUser("teste");

// Atividade

// Atividade 1: Estrutura de Dados e Propriedades Opcionais
// O uso mais comum de interfaces é definir a estrutura exata de um objeto, geralmente dados que vêm de uma API ou que representam entidades do sistema.

// 📝 O Desafio
// Crie a interface Produto e, em seguida, garanta que todos os objetos criados para essa interface sigam o contrato.

// Propriedade	Tipo	Obrigatório?
// id	        number	Sim
// nome	        string	Sim
// preco	    number	Sim
// descricao	string	Opcional
// tags	        string[] (Array de strings)	Opcional

// 🛠️ Tarefas Práticas
// Defina a Interface: Escreva a interface Produto usando o operador de propriedade opcional (?) quando necessário.

// Crie Objetos:

// Crie um objeto monitor que contenha todas as propriedades (incluindo descricao e tags).

// Crie um objeto teclado que omita as propriedades opcionais (descricao e tags).

interface Produto {
  id: Number;
  name: string;
  price: number;
  description?: string;
  tags?: string[];
}

const monitor: Produto = {
  id: 1,
  name: "monitor",
  price: 423,
  description: "monitor ips 234324hz",
  tags: ["eletronico", "computador"],
};

const teclado: Produto = {
  id: 2,
  name: "teclado",
  price: 150,
};

// Atividade 2: Herança e Tipagem de Funções (Métodos)
// Interfaces podem ser usadas para tipar não apenas dados, mas também comportamentos (métodos) e podem estender outras interfaces.

// 📝 O Desafio
// Crie um sistema de registro que diferencia entre usuários normais e administradores.

// Crie a interface base Pessoa que define as propriedades básicas de qualquer usuário.

// Crie uma interface filha Administrador que herda de Pessoa e adiciona funcionalidades específicas.

// Interface	Propriedade/Método	Tipo
// Pessoa	nome	string
// email	string
// Administrador	Herda de Pessoa
// nivelAcesso	number
// deletarUsuario(id: number): boolean	Método (assinatura de função)

// Exportar para as Planilhas
// 🛠️ Tarefas Práticas
// Defina as Interfaces: Use a palavra-chave extends para fazer Administrador herdar de Pessoa.

// Crie a Função: Crie uma variável admin: Administrador e atribua a ela um objeto que contenha todas as propriedades e o método deletarUsuario (a implementação do método pode ser apenas return true;).

// Teste a Chamada: Chame o método admin.deletarUsuario(42) e verifique se o TypeScript reconhece a assinatura correta.

interface Pessoa {
  name: string;
  email: string;
}

interface Administrador extends Pessoa {
  nivelAcesso: number;
  deletarUsuario(): void;
}

const admin: Administrador = {
  name: "Joao",
  email: "email@teste",
  nivelAcesso: 10,
  deletarUsuario: () => {
    return true;
  },
};
