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
                        <p>Card Front:</p>
                        <textarea
                            name="front"
                            cols={20}
                            rows={5}
                            value={front}
                            onChange={handleChange}
                        ></textarea>
                        <p>Card Back:</p>
                        <textarea
                            name="back"
                            cols={20}
                            rows={5}
                            value={back}
                            onChange={handleChange}
                        ></textarea>
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
    border: 1px purple solid;
`

const EditMode = styled.div`
    padding: 4px;
    border: 1px green solid;
`

const StudyMode = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px pink solid;
`

const StudyModeFront = styled.p`
    font-size: 42px;
`

const StudyModeBack = styled.p`
    font-size: 32px;
`

export default Card
