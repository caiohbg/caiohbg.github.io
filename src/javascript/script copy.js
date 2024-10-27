document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    })

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging');
    })
})

document.querySelectorAll('.kanban-cards').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        e.currentTarget.classList.add('cards-hover');
    })
    column.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('cards-hover');

    })

    column.addEventListener('drop', e => {
        e.currentTarget.classList.remove('cards-hover');

        const dragCard = document.querySelector('.kanban-card.dragging');
        e.currentTarget.appendChild(dragCard)
    })
})


const addCardButtons = document.querySelectorAll('.add-card');

function duplicateCard(column_dest) {
    const cardsContainer = column_dest.querySelector('.kanban-cards');
    const fisrtCard = cardsContainer.querySelector('.kanban-card');
    if (fisrtCard) { 
        const clonedCard = fisrtCard.cloneNode(true);
        cardsContainer.appendChild(clonedCard);
    }
}


addCardButtons.forEach(button => {
    button.addEventListener('click', function () {
        const column_dest = this.closest('.kanban-column');
        duplicateCard(column_dest);
    } )
})
