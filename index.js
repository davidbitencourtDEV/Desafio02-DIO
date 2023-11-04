function calcularNivelDeRankeadas(vitorias, derrotas) {
    let saldoRankeadas = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias > 20 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias > 50 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias > 80 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias > 90 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoRankeadas, nivel };
}

// Exemplo de uso da função para calcular o nível de um jogador
let jogador = { nome: "David o Guerreiro", vit: 70, der: 20 };
let resultado = calcularNivelDeRankeadas(jogador.vit, jogador.der);

console.log("O Herói " + jogador.nome + " tem saldo de " + resultado.saldoRankeadas + " está no nível de " + resultado.nivel);
