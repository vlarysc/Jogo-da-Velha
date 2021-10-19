let celula1 = document.getElementById("celula1");
let celula2 = document.getElementById("celula2");
let celula3 = document.getElementById("celula3");
let celula4 = document.getElementById("celula4");
let celula5 = document.getElementById("celula5");
let celula6 = document.getElementById("celula6");
let celula7 = document.getElementById("celula7");
let celula8 = document.getElementById("celula8");
let celula9 = document.getElementById("celula9");
let potuacaoPlay1 = document.getElementById("potuacaoPlay1");
let potuacaoPlay2 = document.getElementById("potuacaoPlay2");
let round = document.getElementById("rodada");
let celulas = document.querySelectorAll(".celula");

let rodadaAtual = 0;

let jogador1 = [];
let jogador2 = [];

let jogadorAtual = 0;

celulas.forEach((element) => {
  element.addEventListener("click", function (event) {
    if (jogadorAtual == 1) {
      event.target.innerHTML = "o";
      /* jogador1.push(id); */
    } else {
      event.target.innerHTML = "x";
      /* jogador2.push(id); */
    }
    atualizarJogador();
  });
});

function jogadorSelecionado() {
  let placar1 = document.getElementById("placar1");
  let placar2 = document.getElementById("placar2");

  if (jogadorAtual === 1) {
    placar1.classList.add("jogadorAtual");
    placar2.classList.remove("jogadorAtual");
  } else {
    placar2.classList.add("jogadorAtual");
    placar1.classList.remove("jogadorAtual");
  }
}

function atualizarJogador() {
  jogadorSelecionado();
  jogadorAtual == 1 ? (jogadorAtual = 2) : (jogadorAtual = 1);
}

function marcarCelula(id, ev) {
  if (jogadorAtual == 1) {
    celula1.innerHTML = "x";
    jogador1.push(id);
  } else {
    celula1.innerHTML = "o";
    jogador2.push(id);
  }

  console.log(res);

  console.log(id);
}

/* Inicia com  o jogador 1 */
/* Criar um array para jogador 1 e outro para o jogador 2*/
/* criar uma variavel com o jogador atual */
/* Criar uma variavel com a rodada atual  */
/* Criar variaveis com os id dos click que serão modificados no click recebendo um texto (x, o, rodada) */
/* Criar  função que adiciona e remove bordas rosas, baseado no jogador atual*/

/*  @@@ QUANDO EU CLICAR @@@ */

/* Após o click a celula clicada recebera o texto referente ao número do jogador */
/* Após o segundo click o número do jogador recebe ele mesmo + 1, sendo que ele receberá um tratamento para sempre ficar entre 1 e 2 */
/* Sempre que o click acontecer ele deve validar os números do array do jogador que fez a jogada e dizer se o mesmo ganhou ou não */
