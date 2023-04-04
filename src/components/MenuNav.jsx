import React from 'react'

import styled from 'styled-components'
import * as Styled from './Styles'

function MenuNav({ changeMode, isStackEmpty, studyMode }) {
    return (
        <>
            <ChangeModeButton onClick={changeMode} disabled={isStackEmpty}>
                {studyMode ? 'Enable Edit Mode' : 'Enable Study Mode'}
            </ChangeModeButton>
        </>
    )
}

const ChangeModeButton = styled(Styled.Button)`
    width: 16rem;

    margin-left: auto;
    margin-right: auto;
`

export default MenuNav
