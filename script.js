// Lista muito maior de mensagens motivacionais
const mensagensCoracao = [
    "Vai dar certo, como sempre.",
    "Você é mais forte do que pensa.",
    "Mesmo nas curvas mais difíceis, você continua acelerando.",
    "Tudo passa, e o melhor ainda está por vir.",
    "Você é a calmaria em meio ao caos.",
    "Cada passo, mesmo pequeno, é uma vitória.",
    "Respira fundo… e lembra que você consegue.",
    "Seu sorriso ilumina mais do que você imagina.",
    "As tempestades passam e deixam o sol brilhar mais forte.",
    "Confia no seu coração, ele sabe o caminho.",
    "Não desista, os melhores dias ainda estão por vir.",
    "Você é luz, mesmo nos dias nublados.",
    "Sei que é difícil, mas você já superou tanta coisa.",
    "Continue acreditando em você, sempre.",
    "Cada curva da vida te deixa mais forte e sábia."
];

// Evento do botão flutuante
document.getElementById("botao-flutuante").addEventListener("click", () => {
    const msg = mensagensCoracao[Math.floor(Math.random() * mensagensCoracao.length)];
    const p = document.getElementById("mensagem-flutuante");
    p.textContent = msg;
    p.style.display = "block";
    // Ocultar após 5 segundos
    setTimeout(() => { p.style.display = "none"; }, 5000);
});


// Botão versículo bíblico
document.getElementById("botao-biblia").addEventListener("click", () => {
    const versiculos = [
        "O Senhor é meu pastor; nada me faltará. – Salmos 23:1",
        "Entrega o teu caminho ao Senhor; confia nele, e ele o fará. – Salmos 37:5",
        "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus. – Isaías 41:10",
        "O Senhor é a minha luz e a minha salvação; a quem temerei? – Salmos 27:1"
    ];
    const versiculo = versiculos[Math.floor(Math.random() * versiculos.length)];
    document.getElementById("versiculo").textContent = versiculo;
});

// Salvar desabafo no localStorage
function salvarDesabafo() {
    const text = document.getElementById("desabafo").value;
    if(text.trim() === "") return;
    let desabafos = JSON.parse(localStorage.getItem("desabafos")) || [];
    desabafos.push(text);
    localStorage.setItem("desabafos", JSON.stringify(desabafos));
    document.getElementById("desabafo").value = "";
    mostrarDesabafos();
}

function mostrarDesabafos() {
    const desabafos = JSON.parse(localStorage.getItem("desabafos")) || [];
    const container = document.getElementById("desabafos-salvos");
    container.innerHTML = desabafos.map(d => `<p>💌 ${d}</p>`).join("");
}

function limparDesabafo() {
    localStorage.removeItem("desabafos");
    document.getElementById("desabafos-salvos").innerHTML = "";
    document.getElementById("desabafo").value = "";
    alert("Todos os desabafos foram limpos ❤️");
}

mostrarDesabafos();

// Próxima corrida ao clicar no capacete
document.getElementById("capacete").addEventListener("click", () => {
    const proximaCorrida = "Grande Prêmio da Itália - 7 de Setembro de 2025 🇮🇹";
    document.getElementById("proxima-corrida").textContent = "🏁 " + proximaCorrida;
});

// Efeito de pétalas caindo
const petalsContainer = document.querySelector('.petals');
setInterval(() => {
    const petal = document.createElement('div');
    petal.textContent = "🌸";
    petal.style.position = 'absolute';
    petal.style.left = Math.random() * window.innerWidth + 'px';
    petal.style.fontSize = (Math.random() * 15 + 15) + 'px';
    petal.style.animation = `fall ${Math.random() * 5 + 5}s linear`;
    petalsContainer.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 10000);
}, 500);
// Texto da carta
const mensagemCarta = `
Clara ❤️

Eu queria começar dizendo que você é uma pessoa muito especial pra mim. 
Sei que, hoje, talvez eu tenha falado ou feito coisas que não saíram como eu queria, 
e se isso te fez sentir que eu não gosto das suas brincadeiras ou que não quero estar por perto… me desculpa, de verdade.

A verdade é que eu gosto muito de conversar contigo e com o nosso espelho 
e nunca foi minha intenção te fazer pensar o contrário.

Sobre o grupo do espelho… eu sei que tenho estado mais afastado, mas não é porque não quero me aproximar pelo contrário. 
Às vezes eu fico meio perdido, sem saber como entrar nas conversas, e isso me faz parecer distante. 
Mas a verdade é que eu gosto muito da nossa amizade e quero estar mais presente.

Eu gosto muito quando fazemos trabalhos da escola juntos. Parece simples, mas pra mim é um dos momentos em que consigo interagir mais com você, 
me sentir parte, ajudar o grupo e compartilhar algo bom. Esses momentos são importantes pra mim, 
porque me lembram que, mesmo nos dias corridos ou confusos, ainda existem pessoas com quem vale a pena estar.

Se em algum momento eu te fiz sentir menos importante, ou se pareci indiferente, quero que saiba que não era o que eu queria transmitir. 
Eu admiro muito quem você é sua forma de lidar com as coisas, seu jeito único de ver o mundo, e até suas brincadeiras, 
que, no fundo, sempre trazem leveza e arrancam um sorriso, mesmo quando os dias não estão fáceis.

Então… me desculpa. Por qualquer mal entendido, por qualquer silêncio mal interpretado. 
Quero muito que a gente continue rindo, conversando e criando momentos que daqui a um tempo a gente olhe pra trás e pense: “valeu a pena”.

Você é importante pra mim, Clara. E eu não quero que isso se perca. 

Vai dar certo ❤️
`;

// Abrir carta
function abrirCartaSecreta() {
    document.getElementById("cartaSecretaModal").style.display = "block";
    escreverTexto("textoCarta", mensagemCarta, 30);
}

// Fechar carta
function fecharCartaSecreta() {
    document.getElementById("cartaSecretaModal").style.display = "none";
}

// Efeito máquina de escrever
function escreverTexto(elementId, text, speed) {
    let i = 0;
    const elemento = document.getElementById(elementId);
    elemento.innerHTML = "";
    function type() {
        if (i < text.length) {
            elemento.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}
