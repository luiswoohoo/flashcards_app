import React, { useState } from 'react'

import MenuNav from './MenuNav'
import StackNav from './StackNav'
import Card from './Card'
import CardNav from './CardNav'

import styled from 'styled-components'

function Stack({ stackID, cards, setStackOfCards }) {
    const [isStackEmpty, setIsStackEmpty] = useState(emptyStackChecker(cards))
    const [studyMode, setStudyMode] = useState(!emptyStackChecker(cards))
    const [currentCardIndex, setCurrentCardIndex] = useState(
        cards.findIndex((card) => card.isCurrentCard)
    )
    const [wiggle, setWiggle] = useState('')

    function newCard() {
        // Insert new card after the current top card
        const newCard = {
            id: crypto.randomUUID(),
            isCurrentCard: true,
            isFlippedToFront: true,
            front: '',
            back: '',
        }

        const updatedCards = [...cards]
        updatedCards.splice(currentCardIndex + 1, 0, newCard)

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: updatedCards.map((card) => {
                    return card.id === newCard.id ? { ...card } : { ...card, isCurrentCard: false }
                }),
            }
        })

        setIsStackEmpty(false)
        setCurrentCardIndex(updatedCards.findIndex((card) => card.id === newCard.id))
    }

    function deleteCard() {
        // Delete current card and if next card exists
        // set it to be the current card
        const nextIndex = nextIndexFinder(currentCardIndex)

        const updatedCards =
            cards.length === 1
                ? []
                : [...cards]
                      .map((card, index) => {
                          return index === nextIndex
                              ? { ...card, isCurrentCard: true }
                              : { ...card }
                      })
                      .filter((card, index) => index !== currentCardIndex)

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: updatedCards,
            }
        })

        setIsStackEmpty(emptyStackChecker(updatedCards))
        setCurrentCardIndex(
            updatedCards.length >= 1 ? updatedCards.findIndex((card) => card.isCurrentCard) : 0
        )
    }

    function nextCard() {
        // Set the isCurrentCard property to true
        // for the next card in the stack
        // and set isCurrentCard property to false for the rest
        const nextIndex = nextIndexFinder(currentCardIndex)
        const updatedCards = [...cards].map((card, index) => {
            return index === nextIndex
                ? { ...card, isCurrentCard: true }
                : { ...card, isCurrentCard: false, isFlippedToFront: true }
        })

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: updatedCards,
            }
        })

        setCurrentCardIndex(updatedCards.findIndex((card) => card.isCurrentCard))
        setWiggle('wiggleNext')
    }

    function prevCard() {
        // Set the isCurrentCard property to true
        // for the previous card in the stack
        // and set isCurrentCard property to false for the rest
        const prevIndex = prevIndexFinder(currentCardIndex)
        const updatedCards = [...cards].map((card, index) => {
            return index === prevIndex
                ? { ...card, isCurrentCard: true }
                : { ...card, isCurrentCard: false, isFlippedToFront: true }
        })

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: updatedCards,
            }
        })

        setCurrentCardIndex(updatedCards.findIndex((card) => card.isCurrentCard))
        setWiggle('wiggleBack')
    }

    function flipCard() {
        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: [...cards].map((currentCard) => {
                    return currentCard.id === cards[currentCardIndex].id
                        ? { ...currentCard, isFlippedToFront: !currentCard.isFlippedToFront }
                        : { ...currentCard }
                }),
            }
        })
    }

    function resetWiggle() {
        setWiggle('')
    }

    function emptyStackChecker(stackOfCards) {
        // If stack doesn't have any cards
        // return true else return false
        return stackOfCards.length === 0
    }

    function nextIndexFinder(index) {
        if (index === cards.length - 1) {
            return 0
        } else {
            return index + 1
        }
    }

    function prevIndexFinder(index) {
        if (cards.length === 1) {
            return 0
        } else if (index === 0) {
            return cards.length - 1
        } else {
            return index - 1
        }
    }

    function updateCardInfo(e) {
        const { name, value } = e.target

        setStackOfCards((currentStack) => {
            return {
                ...currentStack,
                cards: [...cards].map((currentCard) => {
                    return currentCard.id === cards[currentCardIndex].id
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
            <MenuNav
                changeMode={changeMode}
                isStackEmpty={isStackEmpty}
                studyMode={studyMode}
            ></MenuNav>

            {!studyMode && (
                <StackNav newCard={newCard} deleteCard={deleteCard} isStackEmpty={isStackEmpty} />
            )}

            {cards.length === 0 && (
                <EmptyStack>
                    <p>Create some cards</p>
                </EmptyStack>
            )}

            {cards.length > 0 && (
                <>
                    <Card
                        key={cards[currentCardIndex].id}
                        studyMode={studyMode}
                        isFlippedToFront={cards[currentCardIndex].isFlippedToFront}
                        front={cards[currentCardIndex].front}
                        back={cards[currentCardIndex].back}
                        updateCardInfo={updateCardInfo}
                        flipCard={flipCard}
                        wiggle={wiggle}
                        resetWiggle={resetWiggle}
                        prevCard={prevCard}
                        nextCard={nextCard}
                    ></Card>

                    <CardNav
                        prevCard={prevCard}
                        nextCard={nextCard}
                        flipCard={flipCard}
                        currentCardIndex={currentCardIndex}
                        totalCards={cards.length}
                    />
                </>
            )}
        </StackWrapper>
    )
}

const StackWrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    max-width: 600px;
    max-height: 1000px;

    padding: 8px;

    font-family: 'Open Sans', sans-serif;
    color: var(--theme-dark-primary);
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
