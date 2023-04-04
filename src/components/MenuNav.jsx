import React from 'react'

import styled from 'styled-components'
import * as Styled from './Styles'

function MenuNav({ changeMode, isStackEmpty, studyMode }) {
    return (
        <Styled.Nav>
            <ChangeModeButton onClick={changeMode} disabled={isStackEmpty}>
                {studyMode ? 'Enable Edit Mode' : 'Enable Study Mode'}
            </ChangeModeButton>
        </Styled.Nav>
    )
}

const ChangeModeButton = styled(Styled.Button)`
    width: 16rem;
`

export default MenuNav
