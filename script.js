function aprender(tema) {
    const mensagens = {
        'Ecologia': 'Iniciando aventura na floresta! 🌳 Vamos proteger a biodiversidade?',
        'Tecnologia': 'Conectando ao catálogo de APIs... 🚀 A agricultura digital reduz custos e tempo!',
        'Solos': 'Mergulhando na terra! 🌾 O segredo de uma alimentação saudável começa aqui.'
    };
    alert(mensagens[tema] || "Bem-vindo ao mundo da ciência!");
}

function scrollParaConteudo() {
    document.getElementById('conteudo').scrollIntoView({ behavior: 'smooth' });
}
