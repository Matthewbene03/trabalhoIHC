// --- LÓGICA PARA O ALTO CONTRASTE ---

document.addEventListener('DOMContentLoaded', function() {
    
    const contrasteButton = document.getElementById('btn-alto-contraste');
    const iconeContraste = document.getElementById('icone-contraste');
    const body = document.body;

    // Se os elementos não existirem, interrompe o script para evitar erros.
    if (!contrasteButton || !iconeContraste) {
        return;
    }

    // --- FUNÇÕES ---

    // Função que atualiza o ÍCONE e o ALT TEXT com base no estado atual
    function atualizarIconeContraste() {
        if (body.classList.contains('alto-contraste')) {
            // Se o modo contraste está ATIVO, o ícone deve mostrar o SOL (próxima ação: ir para o modo claro)
            iconeContraste.src = '../img/icone-contraste-sol.png';
            iconeContraste.alt = 'Desativar modo de alto contraste (ativar modo claro)';
        } else {
            // Se o modo contraste está INATIVO, o ícone deve mostrar a LUA (próxima ação: ir para o modo escuro)
            iconeContraste.src = '../img/icone-contraste-lua.png';
            iconeContraste.alt = 'Ativar modo de alto contraste (ativar modo escuro)';
        }
    }

    // Função principal que ativa, desativa e salva a preferência
    function toggleAltoContraste() {
        body.classList.toggle('alto-contraste');
        localStorage.setItem('altoContrasteAtivo', body.classList.contains('alto-contraste'));
        atualizarIconeContraste();
    }

    // Função que carrega a preferência do usuário ao entrar na página
    function carregarPreferenciaContraste() {
        const altoContrasteAtivo = localStorage.getItem('altoContrasteAtivo') === 'true';
        if (altoContrasteAtivo) {
            body.classList.add('alto-contraste');
        }
        atualizarIconeContraste();
    }

    // --- EXECUÇÃO ---
    contrasteButton.addEventListener('click', toggleAltoContraste);
    carregarPreferenciaContraste();
});