import React from 'react'

import styled, { css } from 'styled-components'

function EditCard({ front, back, updateCardInfo }) {
    return (
        <Wrapper>
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
        </Wrapper>
    )
}

// Styling for card in Edit Mode
const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: 2px var(--theme-light-primary) solid;
    border-radius: 8px;

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

export default EditCard
