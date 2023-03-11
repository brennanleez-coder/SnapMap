import styled from "styled-components";


export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
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
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
`;

export const WeatherPeriod = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;