import styled from 'styled-components';


export const StyledCard = styled.div`
  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;
  min-width: 300px;
  max-width: 400px;
  flex: 1;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;

export const ClickableCard = ({ children, onClick }) => (
    <StyledButton onClick={onClick}>
        <StyledCard>{children}</StyledCard>
    </StyledButton>
);