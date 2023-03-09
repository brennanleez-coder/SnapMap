import styled from 'styled-components';

export const StyledCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-in-out;
    &:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        transform: scale(1.05);
    }
    

`