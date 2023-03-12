import styled from "styled-components";

export const StyledForecastItem = styled.div`
    padding: 10px;
    text-align: center;
    background-color: white;
    border-radius: 5px;

    & > p {
        color: gray
    }


`
    
export const StyledForecastList = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 20px;
        margin: 0 auto;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
        }
`