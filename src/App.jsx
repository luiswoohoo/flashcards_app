import React, { useState, useEffect } from 'react'

import Stack from './components/Stack'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'

import { DEFAULT_STACK } from './default_stack'

function App() {
    // Check local storage for existing stack of cards
    // If none is found, create a 'Default' stack
    const [stackOfCards, setStackOfCards] = useState(() => {
        const cardsInLocalStorage = localStorage.getItem('cards')
        const parsedCards = JSON.parse(cardsInLocalStorage)
        return parsedCards || DEFAULT_STACK
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

    background-color: var(--theme-dark-primary);
`

export default App
