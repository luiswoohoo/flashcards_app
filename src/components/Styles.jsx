import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    gap: 1rem;
    justify-content: space-around;

    color: var(--theme-dark-primary);
`

const Button = styled.button`
    height: 2.2rem;

    border: none;
    border-radius: 8px;

    margin: 8px;
    padding: 4px;
`

export { Nav, Button }
