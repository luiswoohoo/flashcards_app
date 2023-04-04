import React from 'react'

import styled from 'styled-components'

import EditCard from './EditCard'
import StudyCard from './StudyCard'

function Card({
    studyMode,
    isFlippedToFront,
    front,
    back,
    updateCardInfo,
    flipCard,
    wiggle,
    resetWiggle,
    prevCard,
    nextCard,
}) {
    return (
        <Wrapper>
            {!studyMode && (
                <EditCard front={front} back={back} updateCardInfo={updateCardInfo}></EditCard>
            )}

            {studyMode && (
                <StudyCard
                    flipCard={flipCard}
                    isFlippedToFront={isFlippedToFront}
                    wiggle={wiggle}
                    resetWiggle={resetWiggle}
                    prevCard={prevCard}
                    nextCard={nextCard}
                    front={front}
                    back={back}
                ></StudyCard>
            )}
        </Wrapper>
    )
}

// Styling for card in Edit Mode and Study Mode
const Wrapper = styled.div`
    width: 90%;
    height: 100%;
    margin: auto;

    /* Card Flip Effect */
    perspective: 1000px;
`

export default Card
