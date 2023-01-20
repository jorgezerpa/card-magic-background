'use strict'
const container = document.querySelector('.cardsContainer')
const cards = document.querySelectorAll('.cardsContainer>div')

const mapImage = 'url(./assets/map.jpg)'
container.style.backgroundImage = mapImage

const paths = {
    'card1': 'url(./assets/irland.jpg)',
    'card2': 'url(./assets/germany.jpg)',
    'card3': 'url(./assets/italy.jpg)',
    'card4': 'url(./assets/sweden.jpg)',
}


cards.forEach(card =>card.addEventListener('mouseover', ()=>{
    container.style.backgroundImage = paths[card.id]
}))

container.addEventListener('mouseleave', ()=>container.style.backgroundImage = mapImage)
    