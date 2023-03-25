import React, { useState } from 'react'

import Card from './Card'
import styled from 'styled-components'

function Stack({ stackID, stackName, cards, setStackOfCards }) {
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
        console.log('clicked flip')
        console.log(cards[0].isFlippedToFront)
    }

    function emptyStackChecker(stackOfCards) {
        // If stack doesn't have any cards
        // return true else return false
        return stackOfCards.length === 0
    }

    function handleChange(e) {
        const { name, value } = e.target
        console.log(name)
        console.log(value)

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
                    <button onClick={newCard}>New Card</button>
                    <button onClick={deleteCard} disabled={isStackEmpty}>
                        Delete Card
                    </button>
                    <button>Import</button>
                    <button>Export</button>
                </StackNav>
            )}

            {/* Stack info */}
            {/* <p>Stack ID: {stackID}</p>
            <p>Stack Name: {stackName}</p> */}

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
                        <button onClick={prevCard} disabled={isStackEmpty}>
                            Back
                        </button>
                        <button onClick={flipCard} disabled={isStackEmpty}>
                            Flip
                        </button>
                        {!studyMode && (
                            <>
                                <button disabled={isStackEmpty}>All Front</button>
                                <button disabled={isStackEmpty}>All Back</button>
                            </>
                        )}

                        <button onClick={nextCard} disabled={isStackEmpty}>
                            Next
                        </button>
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
`

const ChangeModeButton = styled.button`
    margin: 4px auto;
    width: 50%;
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
    font-size: 4rem;
`

export default Stack
