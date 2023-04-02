import React, { useState } from 'react'

import styled, { css } from 'styled-components'

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
    const THRESHOLD_TIME = 250
    const THRESHOLD_DISTANCE = 20
    const [gestureStartInfo, setGestureStartInfo] = useState({})

    function gestureStart(e) {
        setGestureStartInfo(() => {
            return {
                t: new Date().getTime(),
                x: e.clientX,
            }
        })
    }

    function gestureEnd(e) {
        e.preventDefault()
        if (e.pointerType !== 'mouse') {
            const now = new Date().getTime()
            const deltaTime = now - gestureStartInfo.t
            const deltaX = e.clientX - gestureStartInfo.x

            if (deltaTime > THRESHOLD_TIME) {
                return
            } else {
                if (deltaX > THRESHOLD_DISTANCE) {
                    // Swipe right
                    prevCard()
                } else if (-deltaX > THRESHOLD_DISTANCE) {
                    // Swipe left
                    nextCard()
                } else {
                    return
                }
            }
        }
    }

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
                                onChange={updateCardInfo}
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
                                onChange={updateCardInfo}
                            ></textarea>
                        </div>
                    </EditCard>
                </Wrapper>
            )}

            {studyMode && (
                <Wrapper>
                    <StudyCard
                        onClick={flipCard}
                        className={`${isFlippedToFront ? '' : 'flipped'} ${
                            wiggle === 'wiggleNext'
                                ? 'wiggleNext'
                                : wiggle === 'wiggleBack'
                                ? 'wiggleBack'
                                : ''
                        }`}
                        onAnimationEnd={resetWiggle}
                        onPointerDown={gestureStart}
                        onPointerUp={gestureEnd}
                        onPointerLeave={gestureEnd}
                        onPointerCancel={gestureEnd}
                    >
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
`

// Styling for card in Edit Mode
const EditCard = styled.div`
    ${CardStyling}

    gap: 2rem;

    background-color: var(--theme-light-primary);
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

    touch-action: pinch-zoom;

    /* Card Flip Effect */
    position: relative;
    transform-style: preserve-3d;
    transition: transform 500ms;
    &.flipped {
        transform: rotateY(180deg);
    }

    /* Card Wiggle Effect */
    &.wiggleNext {
        animation: wiggleN 100ms 2 ease-in-out;
        animation-direction: alternate;
    }

    @keyframes wiggleN {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(1%);
        }
    }

    &.wiggleBack {
        animation: wiggleB 100ms 2 ease-in-out;
        animation-direction: alternate;
    }

    @keyframes wiggleB {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-1%);
        }
    }
`

const StudyCardStyling = css`
    height: 100%;
    width: 100%;
    padding: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--theme-light-primary);

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
