// Função para atualizar a data e hora a partir da API
async function atualizarDataHora() {
    try {
        const resposta = await fetch("https://worldtimeapi.org/api/ip");
        const dados = await resposta.json();

        // Obtenha a data e hora atual do objeto de dados
        const dataHoraAtual = new Date(dados.utc_datetime);

        // Formate a data
        const dataFormatada = `${String(dataHoraAtual.getDate()).padStart(2, '0')}/${String(dataHoraAtual.getMonth() + 1).padStart(2, '0')}/${dataHoraAtual.getFullYear()}`;

        // Formate a hora
        const horaFormatada = `${String(dataHoraAtual.getHours()).padStart(2, '0')}:${String(dataHoraAtual.getMinutes()).padStart(2, '0')}`;

        // Atualize os elementos HTML com os dados da API
        document.getElementById("data").textContent = `Data: ${dataFormatada}`;
        document.getElementById("hora").textContent = `Hora: ${horaFormatada}`;
    } catch (erro) {
        console.error("Erro ao buscar a data e hora:", erro);
    }
}

// Chame a função inicialmente para exibir os dados
atualizarDataHora();

// Atualize os dados a cada intervalo de tempo (por exemplo, a cada minuto)
setInterval(atualizarDataHora, 60000); // 60000 milissegundos = 1 minuto
