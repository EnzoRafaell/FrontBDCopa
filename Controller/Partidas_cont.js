// Controller/Partidas_cont.js
function renderPartidas() {
    const partidas = PartidasService.getAllPartidas();
    let html = `
        <h2 class="text-3xl font-bold mb-8">Próximas Partidas</h2>
        <div class="space-y-6">
    `;

    partidas.forEach(partida => {
        html += `
            <div class="bg-gray-800 rounded-3xl p-8 flex items-center justify-between">
                <div class="flex-1 text-center">
                    <div class="text-4xl mb-2">${partida.selecao1 === 'Brasil' ? '🇧🇷' : 
                                             partida.selecao1 === 'Argentina' ? '🇦🇷' : 
                                             partida.selecao1 === 'Uruguai' ? '🇺🇾' : 
                                             partida.selecao1 === 'Colômbia' ? '🇨🇴' : '🇫🇷'}</div>
                    <h3 class="font-semibold">${partida.selecao1}</h3>
                </div>
                
                <div class="text-center px-8">
                    <div class="text-5xl font-bold text-emerald-400">
                        ${partida.placar1 !== null ? `${partida.placar1} - ${partida.placar2}` : 'VS'}
                    </div>
                    <div class="text-xs text-gray-400 mt-2">${partida.data} • ${partida.hora}</div>
                    <div class="text-xs text-gray-500">${partida.estadio}</div>
                </div>
                
                <div class="flex-1 text-center">
                    <div class="text-4xl mb-2">${partida.selecao2 === 'Brasil' ? '🇧🇷' : 
                                             partida.selecao2 === 'Argentina' ? '🇦🇷' : 
                                             partida.selecao2 === 'Uruguai' ? '🇺🇾' : 
                                             partida.selecao2 === 'Colômbia' ? '🇨🇴' : '🇫🇷'}</div>
                    <h3 class="font-semibold">${partida.selecao2}</h3>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    document.getElementById('content').innerHTML = html;
}