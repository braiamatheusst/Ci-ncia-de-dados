const url = 'https://raw.githubusercontent.com/braiamatheusst/Ci-ncia-de-dados/refs/heads/main/dados-globais.json';

async function visualiarInformacoesGlobais(){
    const res = await fetch(url);

    const dados = await res.json();

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo}
    de pessoas e que aproximadamente ${dados.total_pessoas_conectadas}
    estão conectadas em alguma rede social e passam em média 
    ${dados.tempo_medio} horas conectadas.`
    
    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
    
}

visualiarInformacoesGlobais();