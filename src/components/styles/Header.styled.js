import styled from 'styled-components'

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;

    h1 {
        color: #333;
        font-size: 2rem;
        font-weight: 700;
        margin: 0;
        text-align: center;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px
`

export const Image = styled.img`
    width: 100px;
    height: 100px;
    resize: contain;
    margin-left: 40px;
`