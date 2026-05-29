
const culturas = [
  {
    nome: "Soja",
    emoji: "🌱",
    descricao: "Principal produto de exportação do estado",
    producao: "Cerca de 22 milhões de toneladas"
  },
  {
    nome: "Milho",
    emoji: "🌽",
    descricao: "Maior produtor nacional",
    producao: "Líder absoluto no Brasil"
  },
  {
    nome: "Trigo",
    emoji: "🌾",
    descricao: "Maior produtor de trigo do Brasil",
    producao: "Qualidade internacional"
  },
  {
    nome: "Feijão",
    emoji: "🫘",
    descricao: "Importante na segurança alimentar",
    producao: "Alta produtividade"
  }
];

function renderCulturas() {
  const container = document.getElementById('culturas-grid');
  container.innerHTML = '';

  culturas.forEach(cultura => {
    const card = document.createElement('div');
    card.className = 'stat-card';
    card.innerHTML = `
      <h3>${cultura.emoji} ${cultura.nome}</h3>
      <p>${cultura.descricao}</p>
      <small><strong>${cultura.producao}</strong></small>
    `;
    container.appendChild(card);
  });
}

// Menu mobile (simples)
document.querySelector('.menu-btn').addEventListener('click', () => {
  alert("Menu mobile em desenvolvimento. No GitHub Pages você pode melhorar isso.");
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  renderCulturas();
});
