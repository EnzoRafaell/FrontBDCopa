// Service/Selecao_serv.js
const SelecaoService = {
    selecoes: [
        {
            id: 1,
            nome: "Brasil",
            grupo: "A",
            tecnico: "Dorival Júnior",
            pontos: 12,
            jogos: 4,
            vitorias: 4,
            empates: 0,
            derrotas: 0,
            golsPro: 12,
            golsContra: 2,
            bandeira: "🇧🇷",
            cor: "from-green-600 to-yellow-500"
        },
        {
            id: 2,
            nome: "Argentina",
            grupo: "A",
            tecnico: "Lionel Scaloni",
            pontos: 10,
            jogos: 4,
            vitorias: 3,
            empates: 1,
            derrotas: 0,
            golsPro: 9,
            golsContra: 3,
            bandeira: "🇦🇷",
            cor: "from-lightblue-600 to-white"
        },
        {
            id: 3,
            nome: "Uruguai",
            grupo: "B",
            tecnico: "Marcelo Bielsa",
            pontos: 9,
            jogos: 4,
            vitorias: 3,
            empates: 0,
            derrotas: 1,
            golsPro: 8,
            golsContra: 4,
            bandeira: "🇺🇾",
            cor: "from-blue-700 to-white"
        },
        {
            id: 4,
            nome: "Colômbia",
            grupo: "B",
            tecnico: "Néstor Lorenzo",
            pontos: 7,
            jogos: 4,
            vitorias: 2,
            empates: 1,
            derrotas: 1,
            golsPro: 6,
            golsContra: 3,
            bandeira: "🇨🇴",
            cor: "from-yellow-500 to-blue-600"
        },
        {
            id: 5,
            nome: "França",
            grupo: "C",
            tecnico: "Didier Deschamps",
            pontos: 8,
            jogos: 3,
            vitorias: 2,
            empates: 2,
            derrotas: 0,
            golsPro: 7,
            golsContra: 2,
            bandeira: "🇫🇷",
            cor: "from-blue-600 to-red-600"
        }
    ],

    getAllSelecoes() {
        return this.selecoes;
    },

    getSelecaoById(id) {
        return this.selecoes.find(s => s.id === id);
    }
};