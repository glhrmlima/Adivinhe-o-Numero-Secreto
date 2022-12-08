function verificaSeOChutePossuiUmValorValido(chute) {
  const numero = +chute;

  if (chuteInvalido(numero)) {
    elementoChute.innerHTML += 
    `<div>Valor inválido. Por favor, chute um número entre ${menorValor} e ${maiorValor}.</div>`;
    return;
  } else if (numeroforMaiorouMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += 
    `<div>Valor inválido. O número precisa estar entre ${menorValor} e ${maiorValor}.</div>`;
    return;
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += 
    `<div>O número secreto é menor! <i class="fa-solid fa-circle-down"></i></div>`;
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML += 
    `<div>O número secreto é maior! <i class="fa-solid fa-circle-up"></i></div>`;
  } else if (numero === numeroSecreto) {
    document.body.innerHTML =
    `<h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}!</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`;
  }
}

function chuteInvalido(numero) {
  return Number.isNaN(numero);
}

function numeroforMaiorouMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})