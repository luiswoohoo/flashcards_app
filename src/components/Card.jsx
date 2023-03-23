import React from 'react'

import styled from 'styled-components'

function Card({ studyMode, cardID, isFlippedToFront, front, back, handleChange, flipCard }) {
    return (
        <>
            {!studyMode && (
                <CardInfo>
                    <EditMode>
                        <p>Card ID: {cardID}</p>
                        <p>Current Facing Side: {isFlippedToFront ? 'Front' : 'Back'}</p>
                        <br></br>
                        <p>Card Front:</p>
                        <TextArea
                            name="front"
                            rows={5}
                            value={front}
                            onChange={handleChange}
                        ></TextArea>
                        <p>Card Back:</p>
                        <TextArea
                            name="back"
                            rows={5}
                            value={back}
                            onChange={handleChange}
                        ></TextArea>
                    </EditMode>
                </CardInfo>
            )}

            {studyMode && (
                <CardInfo onClick={flipCard}>
                    <StudyMode>
                        {isFlippedToFront ? (
                            <StudyModeFront>{`${front}`}</StudyModeFront>
                        ) : (
                            <StudyModeBack>{`${back}`}</StudyModeBack>
                        )}
                    </StudyMode>
                </CardInfo>
            )}
        </>
    )
}

const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 100%;
    margin: auto;
    border: 2px whitesmoke solid;
    border-radius: 8px;
    background-color: #fbfbfb;
    color: #212427;
    font-family: 'Open Sans', sans-serif;
`

const EditMode = styled.div`
    padding: 4px;
`

const TextArea = styled.textarea`
    resize: none;
    width: 100%;
`

const StudyMode = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const StudyModeFront = styled.p`
    font-size: 4rem;
    font-weight: 700;
`

const StudyModeBack = styled.p`
    font-size: 4rem;
    font-weight: 400;
`

export default Card
