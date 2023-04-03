import React from 'react'

import styled from 'styled-components'

function MenuNav({ changeMode, isStackEmpty, studyMode }) {
    return (
        <>
            <ChangeModeButton onClick={changeMode} disabled={isStackEmpty}>
                {studyMode ? 'Enable Edit Mode' : 'Enable Study Mode'}
            </ChangeModeButton>
        </>
    )
}

const Button = styled.button`
    border: none;
    border-radius: 8px;

    padding: 0;

    text-align: center;
`

const ChangeModeButton = styled(Button)`
    width: 16rem;
    margin: 4px auto;
    padding: 4px;
`

export default MenuNav
