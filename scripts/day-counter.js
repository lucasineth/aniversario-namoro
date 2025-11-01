// Script contador de Data

const dataInicio = new Date("2017-11-07T00:00:00");

function atualizarContador() {
    const agora = new Date();
    const diffMs = agora - dataInicio;
    const totalSegundos = Math.floor(diffMs / 1000);

    const segundosPorAno = 365 * 24 * 60 * 60; // Ano fixo de 365 dias
    const segundosPorDia = 24 * 60 * 60;
    const segundosPorHora = 60 * 60;
    const segundosPorMinuto = 60;

    const anos = Math.floor(totalSegundos / segundosPorAno);
    const restoAno = totalSegundos % segundosPorAno;

    const dias = Math.floor(restoAno / segundosPorDia);
    const restoDia = restoAno % segundosPorDia;

    const horas = Math.floor(restoDia / segundosPorHora);
    const restoHora = restoDia % segundosPorHora;

    const minutos = Math.floor(restoHora / segundosPorMinuto);
    const segundos = restoHora % segundosPorMinuto

    document.getElementById("contador").innerText = 
    `${anos} ${anos === 1 ? "ano" : "anos"}, `  +
    `${dias} ${dias === 1 ? "dia" : "dias"}, ` +
    `${horas}h ${minutos}min ${segundos}s; `
}

setInterval(atualizarContador, 1000);
atualizarContador();