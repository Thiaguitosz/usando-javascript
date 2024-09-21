console.log("Olá, mundo!");

// Criando um novo elemento h1
let novoElemento = document.createElement('h1');
novoElemento.innerText = 'Bem-vindo ao nosso site!';

// Selecionando o elemento body e adicionando o novo elemento
let elementoBody = document.body;
elementoBody.appendChild(novoElemento);

// Criando um botão para mudar a cor
let botao = document.createElement('button');
botao.innerText = 'Mudar Cor do Texto';
elementoBody.appendChild(botao);

// Array de cores para escolher
const cores = ['red', 'green', 'purple', 'orange', 'pink', 'cyan'];
let indiceCor = 0;

// Função para mudar a cor do texto
botao.addEventListener('click', () => {
    indiceCor = (indiceCor + 1) % cores.length; // Ciclar pelo array de cores
    novoElemento.style.color = cores[indiceCor];
    novoElemento.style.backgroundColor = cores[(indiceCor + 1) % cores.length]; // Mudando a cor de fundo também
});

// Estilizando o elemento
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';
novoElemento.style.padding = '20px';
novoElemento.style.borderRadius = '10px';