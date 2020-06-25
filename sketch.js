let imgCenario;
let imgPersonagem;
let imgInimigo;
let imgInimigoGrande;
let imgInimigoVoador;
let imgGameOver;
let somGameOver;
let somPulo;

let cenario;
let somAmbiente;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;


const matrizPresonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
];
const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
];
const matrizInimigoGrande = [
  [0, 0],
  [400, 0],
  [800, 0],
  [1200, 0],
  [1600, 0],
  [0, 400],
  [400, 400],
  [800, 400],
  [1200, 400],
  [1600, 400],
  [0, 800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200],
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]
const inimigos=[];
function preload() {
  imgCenario = loadImage("imagens/cenario/floresta.png");
  imgPersonagem = loadImage("imagens/personagem/correndo2.png");
  imgInimigo = loadImage("imagens/inimigos/gotinha.png");
  imgInimigoVoador = loadImage("imagens/inimigos/gotinha-voadora.png");
  imgInimigoGrande = loadImage("imagens/inimigos/troll.png");
  imgGameOver = loadImage("imagens/assets/game-over.png");
  somAmbiente = loadSound("sons/fullmetal_mixagem02.mp3");
  somPulo = loadSound("sons/somPulo.mp3");
  somGameOver = loadSound("sons/morteJogoZelda.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 3);
  pontuacao = new Pontuacao();
  personagem = new Personagem(
    matrizPresonagem,
    imgPersonagem,
    0,
    30,
    110,
    135,
    220,
    270
  );
  const inimigo = new Inimigo(
    matrizInimigo,
    imgInimigo,
    width - 52,
    30,
    52,
    52,
    104,
    104,
    10, 
    200
  );
  const inimigoVoador = new Inimigo(
    matrizInimigoVoador,
    imgInimigoVoador,
    width - 52,
    200,
    100,
    75,
    200,
    150,
    10, 
    1500
  );
  const inimigoGrande = new Inimigo(
    matrizInimigoGrande,
    imgInimigoGrande,
    width,
    0,
    200,
    200,
    400,
    400,
    10,
    2500
  );

  inimigos.push(inimigo);
  inimigos.push(inimigoVoador);
  inimigos.push(inimigoGrande);
  
  frameRate(40);
  //somAmbiente.loop();
}

function keyPressed() {
  if (key === " ") {
    personagem.pula();
    somPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  pontuacao.exibe();
  pontuacao.adicionarPonto();

  personagem.exibe();
  personagem.AplicaGravidade();

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
    
    if (personagem.estaColidindo(inimigo)) {
      
      //somAmbiente.stop();
      //somGameOver.play();
      
      image(imgGameOver, width / 2 - 206, height / 2 - 90);
      //colisao
      //noLoop();
      if (key === " ") {
        somPulo = null;
      }
    }
  });
}
