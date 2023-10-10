const perguntas = [
    { pergunta: 'Paris é a capital da França?', resposta: 'Certo', motivoErrado: 'Paris é a capital da França.' },
    { pergunta: 'Miguel de Cervantes escreveu "Dom Quixote"?', resposta: 'Certo', motivoErrado: 'Miguel de Cervantes é o autor de "Dom Quixote".' },
    { pergunta: 'O Sol é uma estrela?', resposta: 'Certo', motivoErrado: 'O Sol é uma estrela.' },
    { pergunta: 'A água ferve a 100 graus Celsius?', resposta: 'Certo', motivoErrado: 'A água ferve a 100 graus Celsius.' },
    { pergunta: 'O Brasil faz fronteira com a Argentina?', resposta: 'Certo', motivoErrado: 'O Brasil faz uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuufronteira com a Argentina.' },
    { pergunta: 'A Terra é plana?', resposta: 'Errado', motivoErrado: 'A Terra é um objeto esférico.' },
    { pergunta: 'O açúcar é salgado?', resposta: 'Errado', motivoErrado: 'O açúcar é doce.' },
    { pergunta: 'A Lua é maior do que a Terra?', resposta: 'Errado', motivoErrado: 'A Lua é menor do que a Terra.' },
    { pergunta: 'O zero é um número par?', resposta: 'Certo', motivoErrado: 'O zero é um número par.' },
    { pergunta: 'A água ferve a 50 graus Celsius?', resposta: 'Errado', motivoErrado: 'A água ferve a 100 graus Celsius.' },
    // Adicione mais perguntas aqui
];


const perguntaElement = document.getElementById('pergunta');
const respostaUsuarioElement = document.getElementById('respostaUsuario');
const botaoCerto = document.getElementById('botaoCerto');
const botaoErrado = document.getElementById('botaoErrado');

function mostrarPergunta() {
    const perguntaAleatoria = escolherPerguntaAleatoria();
    perguntaElement.textContent = perguntaAleatoria.pergunta;
    respostaUsuarioElement.textContent = '';
}

function escolherPerguntaAleatoria() {
    return perguntas[Math.floor(Math.random() * perguntas.length)];
}

function mostrarResposta(resposta) {
    const perguntaAtual = perguntaElement.textContent;
    const perguntaCorreta = perguntas.find(pergunta => pergunta.pergunta === perguntaAtual);

    if (resposta === perguntaCorreta.resposta) {
        respostaUsuarioElement.textContent = 'Certo!';
    } else {
        respostaUsuarioElement.textContent = 'Errado. Motivo: ' + perguntaCorreta.motivoErrado;
    }

    setTimeout(mostrarPergunta, 2000); // Mostrar uma nova pergunta após 2 segundos
}

botaoCerto.addEventListener('click', function () {
    mostrarResposta('Certo');
});

botaoErrado.addEventListener('click', function () {
    mostrarResposta('Errado');
});

mostrarPergunta();
