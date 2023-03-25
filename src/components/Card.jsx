import React from 'react'

import styled, { css } from 'styled-components'

function Card({ studyMode, cardID, isFlippedToFront, front, back, handleChange, flipCard }) {
    return (
        <>
            {!studyMode && (
                <Wrapper>
                    <EditCard>
                        <p>Card ID: {cardID}</p>
                        <p>Current Facing Side: {isFlippedToFront ? 'Front' : 'Back'}</p>

                        <p>Card Front</p>
                        <TextArea
                            name="front"
                            rows={4}
                            maxLength={80}
                            placeholder={'Write something here...'}
                            value={front}
                            onChange={handleChange}
                        ></TextArea>

                        <p>Card Back</p>
                        <TextArea
                            name="back"
                            rows={4}
                            maxLength={80}
                            placeholder={'Write something here...'}
                            value={back}
                            onChange={handleChange}
                        ></TextArea>
                    </EditCard>
                </Wrapper>
            )}

            {/* {studyMode && (
                <CardWrapper onClick={flipCard}>
                    <StudyCard>
                        {isFlippedToFront ? (
                            <StudyCardFront>{`${front}`}</StudyCardFront>
                        ) : (
                            <StudyCardBack>{`${back}`}</StudyCardBack>
                        )}
                    </StudyCard>
                </CardWrapper>
            )} */}

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

const Wrapper = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
    width: 90%;
    height: 100%;
    margin: auto;
    /* border: 2px whitesmoke solid;
    border-radius: 8px;
    background-color: #fbfbfb;
    color: #212427;
    font-family: 'Open Sans', sans-serif; */

    /* border: 2px solid green; */

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

    border: 2px whitesmoke solid;
    border-radius: 8px;
    /* background-color: #fbfbfb; */
    color: #212427;
    font-family: 'Open Sans', sans-serif;
`

const EditCard = styled.div`
    ${CardStyling}

    gap: 1rem;

    /* padding: 4px; */

    border-color: red;
`

const TextArea = styled.textarea`
    resize: none;
    width: 80%;
`

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

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fbfbfb;

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
