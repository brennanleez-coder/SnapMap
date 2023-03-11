import styled from 'styled-components'


export const LocationContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 2rem;
//center the grid
margin: 0 auto;
max-width: 960px;
padding: 0 1rem;
background-color: #fff;


@media only screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;

