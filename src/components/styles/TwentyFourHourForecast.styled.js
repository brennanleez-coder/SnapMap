import styled from "styled-components";

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
`;

export const WeatherHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const WeatherList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const WeatherItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0;
  & > p {
    color: #666;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 2rem 0;
  }
`;

export const WeatherPeriod = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;

  
`;

export const WeatherRegion = styled.div`
  flex: 1;
  text-align: center;

`;
