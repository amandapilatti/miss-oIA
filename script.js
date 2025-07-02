const caixaPrincipal =document.querySelector(".caixa-principal");
const caixaPerguntas =document.querySelector(".caixa-perguntas");
const caixaAlternativas =document.querySelector(".caixa-alternativas");
const caixaResultado =document.querySelector(".caixa-resultado");
const textoResultado =document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:" Você tem o poder de viajar no tempo e durante uma de suas aventuras você foi parar no passado, em um lugar onde tem homens com espadas e arco-flecha. Mas você tem um grande problema, seu poder não está mais funcionando. Quando um deles te vê, ele aponta uma espada em sua direção. O que você vai fazer?",
        alternativas: [
            "Fingir ser um aliado (a) e conseguir convencer eles.",
            "Ficar com medo e fugir."
        ]
    },

    {
        enunciado:"Você começou a ajudar os homens durante os combates e eles te deram uma recompensa. Você irá aceitar?",
        alternativas: [
            "Sim.",
            "Não."
        ]
    },

    {
        enunciado:"Durante uma guerra contra os inimigos você vê uma luz brilhante em sua direção, deixando você hipnotizada. Quando chega perto da luz, um livro se abre rapidamente para uma página desenhada com elementos estranhos. O'Que você fará",
        alternativas: [
            "Ignorar o livro e sua luz.",
            "Pegar o livro."
        ]
    },

    {
        enunciado:"Na missão você começa a viajar involuntariamente para outro mundo, ou dimensão? Quando se recupera de seus sentidos, você está no presente, com seus amigos e familiares. Lembrando-se que recuperou seu poder, mas em uma má hora. O'Que fará?",
        alternativas: [
            "Viver sua vida normalmente sem querer usar seus poderes.",
            "Voltar e ajudar seus novos amigos."
        ]
    },

    {
        enunciado:"Durante sua vida no presente, você adquire um novo poder. Qual poder é?",
        alternativas: [
            "Congelar o tempo.",
            "Voar."
        ]
    }
];

let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();