import React from 'react'

import styled from 'styled-components'
import * as Styled from './Styles'

function StackNav({ newCard, deleteCard, isStackEmpty }) {
    return (
        <Wrapper>
            <StackNavButton onClick={newCard}>New Card</StackNavButton>
            <StackNavButton onClick={deleteCard} disabled={isStackEmpty}>
                Delete Card
            </StackNavButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-around;

    margin-bottom: 8px;

    color: var(--theme-dark-primary);
`

const StackNavButton = styled(Styled.Button)`
    width: 8rem;
`

export default StackNav
