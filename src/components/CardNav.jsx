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

            <CardNavButton>{`${currentCardIndex + 1}/${totalCards}`}</CardNavButton>

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

    margin-top: 8px;

    color: var(--theme-dark-primary);
`

const CardNavButton = styled(Styled.Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 2rem;
`

export default CardNav
