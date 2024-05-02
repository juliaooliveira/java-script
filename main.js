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

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

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

function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}

function comecaCronometro(){
  atualizaCronometro();
  setInterval (atualizarCronometro, 1000);
}
comecaCronometro();
  
