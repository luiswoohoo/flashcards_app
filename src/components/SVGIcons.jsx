import React from 'react'

import styled from 'styled-components'

function SVGBackArrow() {
    return (
        <Wrapper
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
            height="100%"
            width="100%"
        >
            <path
                d="M313.752,134.248c-8.331-8.331-21.839-8.331-30.17,0L176.915,240.915c-8.331,8.331-8.331,21.839,0,30.17l106.667,106.667
				c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17L222.17,256l91.582-91.582
				C322.083,156.087,322.083,142.58,313.752,134.248z"
            />
        </Wrapper>
    )
}

function SVGNextArrow() {
    return (
        <Wrapper
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
            height="100%"
            width="100%"
        >
            <path
                d="M228.418,134.248c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17L289.83,256l-91.582,91.582
      c-8.331,8.331-8.331,21.839,0,30.17c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17
      L228.418,134.248z"
            />
        </Wrapper>
    )
}

const Wrapper = styled.svg`
    fill: var(--theme-dark-primary);
`

export { SVGBackArrow, SVGNextArrow }
