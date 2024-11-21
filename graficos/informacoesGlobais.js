const url = 'https://raw.githubusercontent.com/braiamatheusst/Ci-ncia-de-dados/refs/heads/main/dados-globais.json';

async function visualiarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = await res.json();
}

visualiarInformacoesGlobais();