// Função para adicionar eventos de drag and drop a um card
function addDragAndDropEvents(card) {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    });

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    });
}

// Aplica os eventos de drag and drop aos cards já existentes
document.querySelectorAll('.kanban-card').forEach(card => {
    addDragAndDropEvents(card);
});

// Função para adicionar eventos de drag and drop às colunas
document.querySelectorAll('.kanban-cards').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        e.currentTarget.classList.add('cards-hover');
    });

    column.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('cards-hover');
    });

    column.addEventListener('drop', e => {
        e.currentTarget.classList.remove('cards-hover');

        const dragCard = document.querySelector('.kanban-card.dragging');
        e.currentTarget.appendChild(dragCard);
    });
});

// Função para duplicar um card
function duplicateCard(column_dest) {
    const cardsContainer = column_dest.querySelector('.kanban-cards');
    const firstCard = cardsContainer.querySelector('.kanban-card');

    if (firstCard) {
        const clonedCard = firstCard.cloneNode(true); // Clona o card
        cardsContainer.appendChild(clonedCard); // Adiciona o card clonado
        addDragAndDropEvents(clonedCard); // Adiciona os eventos de drag and drop ao card clonado
    }
}

// Adiciona a função de duplicar ao clique dos botões
const addCardButtons = document.querySelectorAll('.add-card');

addCardButtons.forEach(button => {
    button.addEventListener('click', function () {
        const column_dest = this.closest('.kanban-column'); // Encontra a coluna do botão
        duplicateCard(column_dest); // Duplica o card
    });
});
