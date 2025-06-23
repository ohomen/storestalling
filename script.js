const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " A procrastinação é apenas uma falta de disciplina."
        alternativas: [""
            {
                texto:  "Verdade, quem procrastina é só porque não tem disciplina suficiente."
                afirmacao: "Falso, a procrastinação pode ser um reflexo de fatores emocionais, como medo ou ansiedade."
            },
            {
                texto: "Verdade, quem não tem uma rotina rígida nunca vai ser produtivo.",
                afirmacao: " Falso, a procrastinação pode ser um reflexo de fatores emocionais, como medo ou ansiedade."
            }
        ]
    },
    {
        enunciado: "Estabelecer uma rotina rígida é a única forma de ser produtivo."
            {
                texto: "Verdade, quem não tem uma rotina rígida nunca vai ser produtivo."
                afirmacao: " Falso, uma rotina flexível, mas bem planejada, também pode ser eficaz."
            },
            {
                texto: " Falso, uma rotina flexível, mas bem planejada, também pode ser eficaz.",
                afirmacao: " Falso, qualquer objetivo vago pode ser alcançado sem uma meta específica"
            }
        ]
    },
    {
        enunciado: "Ter uma meta clara e específica é fundamental para alcançar um objetivo."
        alternativas: [
            {
                texto: "Verdade, sem metas claras, fica difícil saber para onde estamos indo."
                afirmacao: "Falso, qualquer objetivo vago pode ser alcançado sem uma meta específica."
            },
            {
                texto: "Verdade, sem metas claras, fica difícil saber para onde estamos indo.",
                afirmacao: " Falso, produtividade é sobre qualidade e foco, não quantidade de horas trabalhadas."
            }
        ]
    },
    {
        enunciado: "A produtividade só depende de trabalhar mais horas por dia.",
        alternativas: [
            {
                texto: " Verdade, trabalhar mais horas sempre aumenta a produtividade",
                afirmacao: "Falso, produtividade é sobre qualidade e foco, não quantidade de horas trabalhadas."
            },
            {
                texto: "Verdade, trabalhar mais horas sempre aumenta a produtividade",
                afirmacao: " Falso, pausas atrapalham o fluxo de trabalho e diminuem a produtividade."
            }
        ]
    },
    {
        enunciado: " Falso, pausas atrapalham o fluxo de trabalho e diminuem a produtividade.",
        alternativas: [
            {
                texto: " Falso, pausas atrapalham o fluxo de trabalho e diminuem a produtividade.",
                afirmacao: " Verdade, pausas ajudam a manter o foco e a energia."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
