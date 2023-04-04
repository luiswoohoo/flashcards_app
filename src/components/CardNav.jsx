import React from 'react'

import styled from 'styled-components'
import * as Styled from './Styles'

import { SVGBackArrow, SVGNextArrow } from './SVGIcons'

function CardNav({ prevCard, nextCard, currentCardIndex, totalCards }) {
    return (
        <Wrapper>
            <CardNavButton onClick={prevCard}>
                <SVGBackArrow />
            </CardNavButton>

            <div>{`${currentCardIndex + 1}/${totalCards}`}</div>

            <CardNavButton onClick={nextCard}>
                <SVGNextArrow />
            </CardNavButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: space-around;

    color: var(--theme-dark-primary);

    div {
        height: 2.2rem;
        width: 3rem;

        border: none;
        border-radius: 8px;

        margin: 8px;
        padding: 4px;

        background: var(--theme-light-primary);

        text-align: center;
    }
`

const CardNavButton = styled(Styled.Button)`
    width: 3.5rem;
`

export default CardNav
