/**
 * HACO CRM - Módulo de Integração de Dados
 */

// Estado Global do Sistema
const State = {
    clientes: [],
    oportunidades: [],
    faturamentos: [],
    config: { darkMode: false }
};

// --- SERVIÇOS DE API ---
const API = {
    async fetchClientes() {
        const res = await fetch('/api/clientes');
        return await res.json();
    },
    async saveCliente(data) {
        const res = await fetch('/api/clientes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        return await res.json();
    },
    async updateOportunidadeStatus(id, novaEtapa) {
        return await fetch(`/api/oportunidades/${id}/status`, {
            method: 'PATCH',
            body: JSON.stringify({ etapa: novaEtapa })
        });
    }
};

// --- RENDERIZAÇÃO DE UI ---
const UI = {
    init() {
        this.loadDashboard();
        this.renderKanban();
        this.bindEvents();
    },

    async loadDashboard() {
        const stats = await API.fetchDashboardStats(); // Exemplo de rota
        document.getElementById('metricsContainer').innerHTML = `
            <div class="metric-card">
                <label>Faturado</label>
                <div class="value">R$ ${stats.total}</div>
            </div>
        `;
    },

    renderKanban() {
        const etapas = ['novo', 'negociando', 'avaliando', 'assinatura', 'ganho'];
        const board = document.getElementById('kanbanBoard');
        board.innerHTML = etapas.map(etapa => `
            <div class="kanban-column" ondrop="onDrop(event)" ondragover="allowDrop(event)" data-status="${etapa}">
                <h3>${etapa.toUpperCase()}</h3>
                <div class="cards-container" id="col-${etapa}"></div>
            </div>
        `).join('');
    }
};

// --- CONTROLE DE DRAG & DROP ---
function onDragStart(ev, id) {
    ev.dataTransfer.setData("text", id);
}

async function onDrop(ev) {
    ev.preventDefault();
    const id = ev.dataTransfer.getData("text");
    const novaEtapa = ev.currentTarget.dataset.status;
    
    // Persiste no Backend via Python
    await API.updateOportunidadeStatus(id, novaEtapa);
    UI.renderKanban(); // Atualiza a tela
}

function allowDrop(ev) { ev.preventDefault(); }

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => UI.init());