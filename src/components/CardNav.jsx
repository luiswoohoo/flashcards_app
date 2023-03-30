import React from 'react'

import styled from 'styled-components'

import backButton from '../assets/UI/back.svg'
import nextButton from '../assets/UI/next.svg'

function CardNav({ prevCard, nextCard, currentCardIndex, totalCards }) {
    return (
        <Wrapper>
            <CardNavButton onClick={prevCard}>
                <img src={backButton} alt="Previous Card" />
            </CardNavButton>

            <CardNavButton>{`${currentCardIndex + 1}/${totalCards}`}</CardNavButton>

            <CardNavButton onClick={nextCard}>
                <img src={nextButton} alt="Next Card" />
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
    width: 2.5rem;
    height: 2.5rem;

    img {
        filter: invert(9%) sepia(18%) saturate(449%) hue-rotate(169deg) brightness(92%)
            contrast(86%);
    }
`

export default CardNav
