import React, { useState, useEffect } from 'react'

import Stack from './components/Stack'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

import './App.css'

function App() {
    const defaultStack = {
        id: crypto.randomUUID(),
        name: 'Default Stack',
        cards: [
            { id: 1, isFlippedToFront: true, front: 'Front 1', back: 'Back 1' },
            { id: 2, isFlippedToFront: false, front: 'Front 2', back: 'Back 2' },
            { id: 3, isFlippedToFront: false, front: 'Front 3', back: 'Back 3' },
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
        <>
            {/* Search local storage for existing sets of cards. If cards exist, display them. Otherwise state that there are no cards. */}
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
        </>
    )
}

export default App
