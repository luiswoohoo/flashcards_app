import React from 'react'

import styled from 'styled-components'

function StackNav({newCard, deleteCard, isStackEmpty}) {
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

    margin: 4px;
    margin-bottom: 10px;

    color: var(--theme-dark-primary);
`

const Button = styled.button`
    border: none;
    border-radius: 8px;

    padding: 0;

    text-align: center;
`

const StackNavButton = styled(Button)`
    width: 8rem;
    padding: 4px;
`

export default StackNav
