// Controller/Selecao_cont.js
function renderSelecoes() {
    const selecoes = SelecaoService.getAllSelecoes();
    let html = `
        <h2 class="text-3xl font-bold mb-8">Seleções da Copa</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    `;

    selecoes.forEach(selecao => {
        html += `
            <div onclick="showSelecaoDetails(${selecao.id})" class="card bg-gray-800 rounded-3xl overflow-hidden cursor-pointer border border-gray-700 hover:border-emerald-500">
                <div class="h-48 bg-gradient-to-br ${selecao.cor} flex items-center justify-center text-8xl">
                    ${selecao.bandeira}
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-2xl font-bold">${selecao.nome}</h3>
                            <p class="text-emerald-400">Grupo ${selecao.grupo}</p>
                        </div>
                        <div class="text-right">
                            <div class="text-3xl font-bold text-emerald-400">${selecao.pontos}</div>
                            <div class="text-xs text-gray-400">PONTOS</div>
                        </div>
                    </div>
                    <div class="mt-4 text-sm text-gray-400">
                        Técnico: <span class="text-white">${selecao.tecnico}</span>
                    </div>
                    <div class="mt-4 grid grid-cols-3 text-center text-xs">
                        <div>${selecao.jogos} Jogos</div>
                        <div class="text-emerald-400">${selecao.vitorias} V</div>
                        <div>${selecao.golsPro}:${selecao.golsContra}</div>
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    document.getElementById('content').innerHTML = html;
}

function showSelecaoDetails(id) {
    const selecao = SelecaoService.getSelecaoById(id);
    if (!selecao) return;

    // Simulação de jogadores por seleção
    const jogadores = getJogadoresBySelecao(id);

    let html = `
        <div class="mb-6 flex items-center gap-4">
            <button onclick="navigateTo('home')" class="text-emerald-400 hover:text-emerald-300">← Voltar</button>
            <div class="text-5xl">${selecao.bandeira}</div>
            <div>
                <h2 class="text-4xl font-bold">${selecao.nome}</h2>
                <p class="text-emerald-400">Grupo ${selecao.grupo} • ${selecao.tecnico}</p>
            </div>
        </div>

        <h3 class="text-2xl font-semibold mb-6">Jogadores</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    `;

    jogadores.forEach(jogador => {
        html += `
            <div onclick="showPlayerModal(${jogador.id})" class="card bg-gray-800 rounded-2xl p-5 cursor-pointer hover:bg-gray-700">
                <div class="text-4xl mb-3">${jogador.posicao === 'Goleiro' ? '🧤' : '⚽'}</div>
                <h4 class="font-bold text-lg">${jogador.nome}</h4>
                <p class="text-sm text-gray-400">${jogador.posicao} • ${jogador.idade} anos</p>
                <p class="text-emerald-400 text-sm mt-2">${jogador.clube}</p>
            </div>
        `;
    });

    html += `</div>`;
    document.getElementById('content').innerHTML = html;
}