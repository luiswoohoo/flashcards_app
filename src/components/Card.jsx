import React from 'react'

import styled, { css } from 'styled-components'

function Card({ studyMode, isFlippedToFront, front, back, handleChange, flipCard }) {
    return (
        <>
            {!studyMode && (
                <Wrapper>
                    <EditCard>
                        <div>
                            <p>Card Front</p>
                            <textarea
                                name="front"
                                rows={4}
                                maxLength={100}
                                placeholder={'Write something here...'}
                                value={front}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div>
                            <p>Card Back</p>
                            <textarea
                                name="back"
                                rows={4}
                                maxLength={100}
                                placeholder={'Write something here...'}
                                value={back}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </EditCard>
                </Wrapper>
            )}

            {studyMode && (
                <Wrapper>
                    <StudyCard onClick={flipCard} className={isFlippedToFront ? '' : 'flipped'}>
                        <StudyCardFront>{`${front}`}</StudyCardFront>

                        <StudyCardBack>{`${back}`}</StudyCardBack>
                    </StudyCard>
                </Wrapper>
            )}
        </>
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

const CardStyling = css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 2px var(--theme-light-primary) solid;
    border-radius: 8px;
    background-color: var(--theme-light-primary);
`

// Styling for card in Edit Mode
const EditCard = styled.div`
    ${CardStyling}

    gap: 2rem;

    border-color: deeppink;

    div {
        width: 80%;
    }

    p {
        text-align: center;
    }

    textarea {
        resize: none;
        width: 100%;
        border: 1px var(--theme-dark-primary) solid;
        border-radius: 8px;
        padding: 4px;
    }
`

// Styling for card in Study Mode
const StudyCard = styled.div`
    ${CardStyling}
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    /* Card Flip Effect */
    position: relative;
    transform-style: preserve-3d;
    transition: transform 500ms;
    &.flipped {
        transform: rotateY(180deg);
    }
`

const StudyCardStyling = css`
    height: 100%;
    width: 100%;
    padding: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    /* background-color: var(--theme-light-primary); */
    background-color: blue;

    font-size: 3rem;

    /* Card Flip Effect */
    backface-visibility: hidden;
    position: absolute;
`

const StudyCardFront = styled.p`
    ${StudyCardStyling}
    font-weight: 700;
`

const StudyCardBack = styled.p`
    ${StudyCardStyling}
    font-weight: 400;

    /* Card Flip Effect */
    transform: rotateY(180deg);
`

export default Card
