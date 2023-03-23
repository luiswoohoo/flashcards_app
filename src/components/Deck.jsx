import React, { useState } from 'react'

function Deck({ deckID, deckName, cards, deckOfCards, setDeckOfCards }) {
    const [topCard, setTopCard] = useState(cards[0])

    function newCard() {
        const newCard = {
            id: crypto.randomUUID(),
            isTopCard: true,
            front: 'New Front',
            back: 'New Back',
        }

        // Add new card to the top of the stack
        const updatedCards = [...cards]
        updatedCards.unshift(newCard)

        setDeckOfCards((currentDeck) => {
            return {
                ...currentDeck,
                cards: [...updatedCards],
            }
        })

        setTopCard(newCard)
    }

    function deleteCard() {
        // Remove the top card from the stack
        const updatedCards = [...cards]
        updatedCards.shift()

        setDeckOfCards((currentDeck) => {
            return {
                ...currentDeck,
                cards: [...updatedCards],
            }
        })

        setTopCard(updatedCards[0])
    }

    function nextCard() {
        // Remove the top card from the stack and
        // add to the end of the stack
        const updatedCards = [...cards]
        const topCard = updatedCards.shift()
        updatedCards.push(topCard)

        setDeckOfCards((currentDeck) => {
            return {
                ...currentDeck,
                cards: [...updatedCards],
            }
        })

        setTopCard(updatedCards[0])
    }

    function prevCard() {
        // Remove the bottom card from the stack and
        // add to the beginning of the stack
        const updatedCards = [...cards]
        const bottomCard = updatedCards.pop()
        updatedCards.unshift(bottomCard)

        setDeckOfCards((currentDeck) => {
            return {
                ...currentDeck,
                cards: [...updatedCards],
            }
        })

        setTopCard(updatedCards[0])
    }

    function emptyDeckChecker(deck) {
        
    }

    return (
        <div key={deckID}>
            {/* CRUD Nav */}
            <div>
                <button onClick={newCard}>New Card</button>
                <button onClick={deleteCard}>Delete Card</button>
            </div>

            <p>Deck ID: {deckID}</p>
            <p>Deck Name: {deckName}</p>

            {cards.length === 0 && <p>Create some cards</p>}
            {cards.length > 0 && (
                <div>
                    <p>Card ID: {topCard.id}</p>
                    <p>Card Front: {topCard.front}</p>
                    <p>Card Back: {topCard.back}</p>
                </div>
            )}

            {/* Card Nav */}
            <div>
                <button onClick={prevCard}>Back</button>
                <button>Flip</button>
                <button onClick={nextCard}>Next</button>
            </div>
        </div>
    )
}

export default Deck
