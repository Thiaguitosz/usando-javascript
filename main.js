console.log("Olá, mundo!");
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// código em cima é o do prof

const botao = document.getElementById('meuBotao');
const div = document.getElementById('minhaDiv');

botao.addEventListener('click', () => {
    const novaCor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    div.style.backgroundColor = novaCor;
});