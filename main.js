const botoes = document ; querySelectorAll ("botao")
const textos = document ; querySelectorAll (".aba-conteudo")

for(let i=0 ; i < botoes.length ; i ++){
botoes.onclick = function () {
for( let j = 0 ; j < botoes.length ; j ++ ){
botoes[j].classlist.remove( "ativo");
textos[i].classlist.remove( "ativo");
}
botoes[i]. classlist. add ("ativo");
textos[i]. classlist. add ("ativo");
}
}

const cotadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2024-30-11T00:00:00");
const tempoObjetivo2 = new Date ("2024-30-11T00:00:00");
const tempoObjetivo3 = new Date ("2024-30-11T00:00:00");
const tempoObjetivo4 = new Date ("2024-30-11T00:00:00");
contadores[0].textContent = calculaTempo(tempoObjetivo1);
function calculaTempo(tempoObjetivo){
  let tempoAtual = new.Date();
  let tempoFinal = tempo.Objetivo - tempo Atual;
  let segundos = math.floor(tempoFinal/1000);
  let minutos = math.floor(segundos/60);
  let horas = math.floor(minutos/60);
  let dias = math.floor(horas/24);
  
  segundos % = 60;
  minutos % = 60;
  horas % = 24;
  return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos"
}
function atualizaCronometro(){
  for(let i = 0 ,i < contadores.lenght; i++){
    contadores[i].textContent = calculaTempo(tempo[i]);
    }
}
function comecaCronometro(){
  atualizaCronometro();
  set Interval (atualizarCronometro, 1000);
}
comecaCronometro();
