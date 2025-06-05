import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

function calcularVolta() {
  // pegar o horario de saida

  const horarioSaida = document.getElementById("saida").value;

  // pegar o horario de almoço
  const horarioAlmoco = parseInt(document.getElementById("tempoAlmoco").value);

  // verifica se o horario de saida foi preenchido
  if (!horarioSaida) {
    document.getElementById("resultado").innerHTML =
      "Por favor, preencha o horário de saída.";
    return;
  }

  // separar o horario de saida em horas e minutos
  const [horas, minutos] = horarioSaida.split(":").map(Number);

  // converter tudo para minutos

  let MinitosTotal = horas * 60 + minutos + horarioAlmoco;

  // calcula as novas horas e minutos

  const horasVolta = Math.floor(MinitosTotal / 60);
  const minutosVolta = MinitosTotal % 60;

  //ajusta para formato 24h

  const horasVoltaFormatada = horasVolta >= 24 ? horasVolta - 24 : horasVolta;

  // formatar a saida com dois digitios

  const horaformatada = String(horasVoltaFormatada).padStart(2, "0");
  const minutosformatados = String(minutosVolta).padStart(2, "0");

  // exibir o resultado na tela

  document.getElementById(
    "resultado"
  ).innerHTML = `Você deve voltar às ${horaformatada}:${minutosformatados}`;
}
