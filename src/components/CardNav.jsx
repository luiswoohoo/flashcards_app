import React from 'react'

import styled from 'styled-components'

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

    margin: 4px;
    margin-top: 10px;
`

const Button = styled.button`
    border: none;
    border-radius: 8px;

    padding: 0;

    text-align: center;
`

const CardNavButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 2.5rem;
    padding: 8px;
`

export default CardNav
