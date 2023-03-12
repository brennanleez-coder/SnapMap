import styled from 'styled-components';

export const StyledDateTimeInput = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  font-family: Arial, sans-serif;

  label {
    display: block;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid grey;
    border-radius: 4px;
    font-size: 1rem;
    color: grey;
    background-color: white;

    &:focus {
      outline: none;
      border-color: #FFC107;
    }

    @media (max-width: 768px) {
      max-width: 100%;
    }
  }
`;
