import React, { useState, useEffect } from 'react'

import Stack from './components/Stack'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

function App() {
    const defaultStack = {
        id: crypto.randomUUID(),
        name: 'Default Stack',
        cards: [
            {
                id: 1,
                isFlippedToFront: true,
                front: 'Tap the card to flip it',
                back: '🥳 Tap Next or Back to see other cards',
            },
            {
                id: 2,
                isFlippedToFront: true,
                front: 'To edit, add or delete your cards...',
                back: 'Tap the button above ☝🏽',
            },
            { id: 3, isFlippedToFront: true, front: '猫', back: '🐈' },
            {
                id: 4,
                isFlippedToFront: true,
                front: "What do you call cheese that isn't yours?",
                back: 'Nacho Cheese',
            },
        ],
    }

    const [stackOfCards, setStackOfCards] = useState(() => {
        const cardsInLocalStorage = localStorage.getItem('cards')
        const parsedCards = JSON.parse(cardsInLocalStorage)
        return parsedCards || defaultStack
    })

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(stackOfCards))
    }, [stackOfCards])

    return (
        <Wrapper>
            {!stackOfCards && 'Create a new stack of cards'}
            {stackOfCards && (
                <Stack
                    stackID={stackOfCards.id}
                    stackName={stackOfCards.name}
                    cards={stackOfCards.cards}
                    setStackOfCards={setStackOfCards}
                />
            )}

            <GlobalStyles />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default App
