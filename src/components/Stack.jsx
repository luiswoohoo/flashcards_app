import React, { useState } from 'react'

import Card from './Card'
import styled from 'styled-components'

function Stack({ stackID, cards, setStackOfCards }) {
    const [isStackEmpty, setIsStackEmpty] = useState(emptyStackChecker(cards))
    const [studyMode, setStudyMode] = useState(!emptyStackChecker(cards))

    function newCard() {
        const newCard = {
            id: crypto.randomUUID(),
            isFlippedToFront: true,
            front: '',
            back: '',
        }

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: [newCard, ...cards],
            }
        })

        setIsStackEmpty(false)
    }

    function deleteCard() {
        // Remove the top card from the stack
        const updatedCards = [...cards].slice(1)

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: updatedCards,
            }
        })

        setIsStackEmpty(emptyStackChecker(updatedCards))
    }

    function nextCard() {
        // Remove the top card from the stack and
        // add to the end of the stack
        const updatedCards = [...cards]
        const topCard = updatedCards.shift()
        updatedCards.push(topCard)

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: updatedCards,
            }
        })
    }

    function prevCard() {
        // Remove the bottom card from the stack and
        // add to the beginning of the stack
        const updatedCards = [...cards]
        const bottomCard = updatedCards.pop()
        updatedCards.unshift(bottomCard)

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: updatedCards,
            }
        })
    }

    function flipCard() {
        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: [...cards].map((currentCard) => {
                    return currentCard.id === cards[0].id
                        ? { ...currentCard, isFlippedToFront: !currentCard.isFlippedToFront }
                        : { ...currentCard }
                }),
            }
        })
    }

    function emptyStackChecker(stackOfCards) {
        // If stack doesn't have any cards
        // return true else return false
        return stackOfCards.length === 0
    }

    function handleChange(e) {
        const { name, value } = e.target

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: [...cards].map((currentCard) => {
                    return currentCard.id === cards[0].id
                        ? { ...currentCard, [name]: value }
                        : { ...currentCard }
                }),
            }
        })
    }

    function changeMode() {
        setStudyMode(!studyMode)
    }

    return (
        <StackWrapper key={stackID}>
            <ChangeModeButton onClick={changeMode} disabled={isStackEmpty}>
                {studyMode ? 'Enable Edit Mode' : 'Enable Study Mode'}
            </ChangeModeButton>
            {!studyMode && (
                <StackNav>
                    <StackNavButton onClick={newCard}>New Card</StackNavButton>
                    <StackNavButton onClick={deleteCard} disabled={isStackEmpty}>
                        Delete Card
                    </StackNavButton>
                </StackNav>
            )}

            {/* Card info */}
            {cards.length === 0 && (
                <EmptyStack>
                    <p>Create some cards</p>
                </EmptyStack>
            )}

            {cards.length > 0 && (
                <>
                    <Card
                        key={cards[0].id}
                        studyMode={studyMode}
                        cardID={cards[0].id}
                        isFlippedToFront={cards[0].isFlippedToFront}
                        front={cards[0].front}
                        back={cards[0].back}
                        handleChange={handleChange}
                        flipCard={flipCard}
                    ></Card>

                    <CardNav>
                        <CardNavButton onClick={prevCard} disabled={isStackEmpty}>
                            Back
                        </CardNavButton>

                        <CardNavButton onClick={flipCard} disabled={isStackEmpty}>
                            Flip
                        </CardNavButton>

                        <CardNavButton onClick={nextCard} disabled={isStackEmpty}>
                            Next
                        </CardNavButton>
                    </CardNav>
                </>
            )}
        </StackWrapper>
    )
}

const StackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100dvw;
    height: 100dvh;
    max-width: 500px;
    max-height: 1000px;

    color: var(--theme-dark-primary);
    font-family: 'Open Sans', sans-serif;
`

const Button = styled.button`
    border: none;
    border-radius: 8px;

    color: var(--theme-dark-primary);
    font-family: 'Open Sans', sans-serif;
`

const StackNavButton = styled(Button)`
    width: 8rem;
    padding: 4px;
`

const CardNavButton = styled(Button)`
    width: 2.5rem;
    height: 2.5rem;
`

const ChangeModeButton = styled(Button)`
    width: 16rem;
    margin: 4px auto;
    padding: 4px;
`

const StackNav = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-around;

    margin: 4px;
    margin-bottom: 10px;
`

const CardNav = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-around;

    margin: 4px;
    margin-top: 10px;
`

const EmptyStack = styled.div`
    height: 70%;

    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
    font-size: 3rem;
    color: var(--theme-light-primary);
`

export default Stack
