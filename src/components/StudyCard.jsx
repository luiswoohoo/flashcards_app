import React, { useState } from 'react'

import styled, { css } from 'styled-components'

function StudyCard({
    flipCard,
    isFlippedToFront,
    wiggle,
    resetWiggle,
    prevCard,
    nextCard,
    front,
    back,
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
        <Wrapper
            onClick={flipCard}
            className={`${isFlippedToFront ? '' : 'flipped'} ${
                wiggle === 'wiggleNext' ? 'wiggleNext' : wiggle === 'wiggleBack' ? 'wiggleBack' : ''
            }`}
            onAnimationEnd={resetWiggle}
            onPointerDown={gestureStart}
            onPointerUp={gestureEnd}
            onPointerLeave={gestureEnd}
            onPointerCancel={gestureEnd}
        >
            <StudyCardFront>{`${front}`}</StudyCardFront>

            <StudyCardBack>{`${back}`}</StudyCardBack>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    border: 2px var(--theme-light-primary) solid;
    border-radius: 8px;

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

const StudyCardFacesStyling = css`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--theme-light-primary);

    padding: 8px;

    font-size: 3rem;

    /* Card Flip Effect */
    backface-visibility: hidden;
    position: absolute;
`

const StudyCardFront = styled.p`
    ${StudyCardFacesStyling}
    font-weight: 700;
`

const StudyCardBack = styled.p`
    ${StudyCardFacesStyling}
    font-weight: 400;

    /* Card Flip Effect */
    transform: rotateY(180deg);
`

export default StudyCard
