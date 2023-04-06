import React from 'react'

import styled from 'styled-components'
import * as Styled from './Styles'

import { SVGBackArrow, SVGNextArrow } from './SVGIcons'

function CardNav({ prevCard, nextCard, flipCard, currentCardIndex, totalCards }) {
    return (
        <Styled.Nav>
            <CardNavButton onClick={prevCard}>
                <SVGBackArrow />
            </CardNavButton>

            <CardNavButton onClick={flipCard}>{`${
                currentCardIndex + 1
            } / ${totalCards}`}</CardNavButton>

            <CardNavButton onClick={nextCard}>
                <SVGNextArrow />
            </CardNavButton>
        </Styled.Nav>
    )
}

const CardNavButton = styled(Styled.Button)`
    width: 3.5rem;
`

export default CardNav
