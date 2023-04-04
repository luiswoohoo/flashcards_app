import React from 'react'

import styled from 'styled-components'
import * as Styled from './Styles'

function StackNav({ newCard, deleteCard, isStackEmpty }) {
    return (
        <Styled.Nav>
            <StackNavButton onClick={newCard}>New Card</StackNavButton>
            <StackNavButton onClick={deleteCard} disabled={isStackEmpty}>
                Delete Card
            </StackNavButton>
        </Styled.Nav>
    )
}

const StackNavButton = styled(Styled.Button)`
    width: 8rem;
`

export default StackNav
