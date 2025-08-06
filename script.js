const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Você tem o poder de viajar no tempo e durante uma de suas aventuras você foi parar no passado, em um lugar onde tem homens com espadas e arco-flecha. Mas você tem um grande problema, seu poder não está mais funcionando. Quando um deles te vê, ele aponta uma espada em sua direção. O que você vai fazer?",
        alternativas: [
            {
                texto: "Fingir ser um aliado (a) e conseguir convencer eles",
                afirmacao: "Quando você viaja no tempo e alguém aponta uma espada em sua direção, você finge ser um aliado do homem, seus companheiros de equipe acreditam em você e eles te protegem dos seus inimigos."
            },
            {
                texto: "Ficar com medo e fugir",
                afirmacao: " Quando você viaja no tempo e alguém aponta uma espada em sua direção, você começa a tremer de medo o homem desconfia de você, mas quando você foge ele corre atrás e consegue te capturar."
            }

        ]
    },

    {
        enunciado: "Você começou a ajudar os homens durante os combates e eles te deram uma recompensa. Você irá aceitar?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Você aceitou uma recompensa dos homens durante sua ajuda nas missões. Recebendo ouro e um amuleto mágico, agradecendo os homens."
            },
            {
                texto: "não",
                afirmacao: "Você não aceitou uma recompensa dos homens durante sua ajuda nas missões. Deixando eles decepcionados com sua atitude, você se arrepende quando descobre o que iria ganhar."
            }

        ]
    },

    {
        enunciado: "Durante uma guerra contra os inimigos você vê uma luz brilhante em sua direção, deixando você hipnotizada. Quando chega perto da luz, um livro se abre rapidamente para uma página desenhada com elementos estranhos. O'Que você fará?",
        alternativas: [
            {
                texto: "Ignorar o livro e sua luz",
                afirmacao: "Você encontra um livro brilhante durante uma guerra, mas ignora ele. O livro te segue e você desiste de ignorar, pegando o livro e ficando hipnotizada."
            },
            {
                texto: "Pegar o livro",
                afirmacao: "Você encontra um livro brilhante durante uma guerra e aproxima-se dele, pegando ele na mão. Esse livro começa a te hipnotizar mais e fazer você viajar para outro mundo."
            }

        ]
    },

    {
        enunciado: "Na missão você começa a viajar involuntariamente para outro mundo, ou dimensão? Quando se recupera de seus sentidos, você está no presente, com seus amigos e familiares. Lembrando-se que recuperou seu poder, mas em uma má hora. O'Que fará?",
        alternativas: [
            {
                texto: "Viver sua vida normalmente sem querer usar seus poderes",
                afirmacao: "Quando você volta para o presente, você recupera seu poder, decidindo não usá-lo por segurança e vive sua vida tranquilamente no presente, usando seu poder apenas para emergências."
            },
            {
                texto: "Voltar e ajudar seus novos amigos",
                afirmacao: "Quando você volta para o presente, você recupera seu poder, decidindo voltar e ajudar seus amigos na guerra, vencendo e voltando para o presente, mas viajando no tempo às vezes."
            }

        ]
    },

    {
        enunciado: "Durante sua vida no presente, você adquire um novo poder. Qual poder é?",
        alternativas: [
            {
                texto: "Congelar o tempo",
                afirmacao: "No presente você adquire um novo poder, congelamento do tempo, onde ele te ajuda e melhora seu antigo poder. Facilitando suas viagens e ações do cotidiano."
            },
            {
                texto: "Voar",
                afirmacao: "No presente você adquire um novo poder, voar, onde ele auxilia junto com seu antigo poder. Sendo um ótimo poder para o cotidiano, sem precisar se atrasar e podendo viajar para outros lugares no mundo, durante o presente principalmente."
            }

        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + "";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();