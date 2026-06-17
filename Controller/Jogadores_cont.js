// Controller/Jogadores_cont.js
function getJogadoresBySelecao(selecaoId) {
    const allPlayers = {
        1: [ // Brasil
            {id: 101, nome: "Alisson", posicao: "Goleiro", idade: 33, clube: "Liverpool"},
            {id: 102, nome: "Marquinhos", posicao: "Zagueiro", idade: 31, clube: "PSG"},
            {id: 103, nome: "Vinícius Júnior", posicao: "Atacante", idade: 25, clube: "Real Madrid"},
            {id: 104, nome: "Rodrygo", posicao: "Atacante", idade: 24, clube: "Real Madrid"},
        ],
        2: [ // Argentina
            {id: 201, nome: "Emiliano Martínez", posicao: "Goleiro", idade: 33, clube: "Aston Villa"},
            {id: 202, nome: "Lionel Messi", posicao: "Atacante", idade: 38, clube: "Inter Miami"},
            {id: 203, nome: "Julián Álvarez", posicao: "Atacante", idade: 25, clube: "Atlético Madrid"},
        ],
        3: [ // Uruguai
            {id: 301, nome: "Federico Valverde", posicao: "Meio-campo", idade: 27, clube: "Real Madrid"},
            {id: 302, nome: "Darwin Núñez", posicao: "Atacante", idade: 26, clube: "Liverpool"},
        ],
        4: [ // Colômbia
            {id: 401, nome: "James Rodríguez", posicao: "Meio-campo", idade: 34, clube: "São Paulo"},
            {id: 402, nome: "Luis Díaz", posicao: "Atacante", idade: 29, clube: "Liverpool"},
        ],
        5: [ // França
            {id: 501, nome: "Kylian Mbappé", posicao: "Atacante", idade: 27, clube: "Real Madrid"},
            {id: 502, nome: "Antoine Griezmann", posicao: "Atacante", idade: 35, clube: "Atlético Madrid"},
        ]
    };
    return allPlayers[selecaoId] || [];
}

function renderAllPlayers() {
    let html = `<h2 class="text-3xl font-bold mb-8">Todos os Jogadores</h2>`;
    html += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;

    // Pegar todos os jogadores
    Object.values({
        1: getJogadoresBySelecao(1),
        2: getJogadoresBySelecao(2),
        3: getJogadoresBySelecao(3),
        4: getJogadoresBySelecao(4),
        5: getJogadoresBySelecao(5)
    }).flat().forEach(jogador => {
        html += `
            <div onclick="showPlayerModal(${jogador.id})" class="card bg-gray-800 rounded-2xl p-6 cursor-pointer hover:bg-gray-700">
                <h4 class="font-bold text-xl">${jogador.nome}</h4>
                <p class="text-emerald-400">${jogador.posicao}</p>
                <p class="text-sm text-gray-400 mt-1">${jogador.clube}</p>
            </div>
        `;
    });

    html += `</div>`;
    document.getElementById('content').innerHTML = html;
}

function showPlayerModal(id) {
    // Busca simples (pode melhorar depois)
    let jogador = null;
    for (let i = 1; i <= 5; i++) {
        const players = getJogadoresBySelecao(i);
        jogador = players.find(p => p.id === id);
        if (jogador) break;
    }

    if (!jogador) return;

    const modal = document.getElementById('player-modal');
    document.getElementById('modal-title').textContent = jogador.nome;
    document.getElementById('modal-content').innerHTML = `
        <div class="text-center">
            <div class="text-8xl mb-6">${jogador.posicao === 'Goleiro' ? '🧤' : '⚽'}</div>
            <h3 class="text-3xl font-bold mb-2">${jogador.nome}</h3>
            <p class="text-xl text-emerald-400">${jogador.posicao}</p>
            <div class="mt-8 grid grid-cols-2 gap-6 text-left">
                <div><strong>Idade:</strong> ${jogador.idade} anos</div>
                <div><strong>Clube:</strong> ${jogador.clube}</div>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('player-modal').classList.add('hidden');
}