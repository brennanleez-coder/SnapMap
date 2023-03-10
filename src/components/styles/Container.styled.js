import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem;
  background-color: #fff;

  @media only screen and (max-width: 768px) {
    max-width: 90%;
  }
`;