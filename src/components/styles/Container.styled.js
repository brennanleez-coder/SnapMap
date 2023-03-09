import styled from 'styled-components';

// Create a <Container> react component that renders a <div> which is
// centered, 960px wide on a desktop, 90% wide on mobile, and has a
// white background with some padding
export const Container = styled.div`
    margin: 0 auto; 
    max-width: 960px;
    padding: 0 1rem;
    width: 90%;
`;