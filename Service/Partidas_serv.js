// Service/Partidas_serv.js
const PartidasService = {
    partidas: [
        {
            id: 1,
            data: "2026-06-20",
            hora: "20:00",
            selecao1: "Brasil",
            selecao2: "Colômbia",
            placar1: 2,
            placar2: 1,
            estadio: "Maracanã"
        },
        {
            id: 2,
            data: "2026-06-21",
            hora: "18:00",
            selecao1: "Argentina",
            selecao2: "Uruguai",
            placar1: 1,
            placar2: 1,
            estadio: "Monumental"
        },
        {
            id: 3,
            data: "2026-06-22",
            hora: "21:00",
            selecao1: "França",
            selecao2: "Brasil",
            placar1: null,
            placar2: null,
            estadio: "Allianz Arena"
        }
    ],

    getAllPartidas() {
        return this.partidas;
    }
};