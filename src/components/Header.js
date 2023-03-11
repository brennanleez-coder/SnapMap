import { Container } from './styles/Container.styled'
import { StyledHeader } from './styles/Header.styled'
import {Nav} from './styles/Header.styled'
import {StyledButton as Button} from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'
import {Image} from './styles/Header.styled'
import { ThemeContext } from 'styled-components'
const Header = () => {
  return (
    <StyledHeader>
        <Container>
          <Nav>
            <Image src='./images/SnapMapLogo.png' alt="" />
            <Button 
            >
              <a
                style={{ textDecoration: "none", color: "black" }}
                target={"_blank"}
                href="https://github.com/brennanleez-coder/SnapMap"
              >
              View Source Code
              </a>
            </Button>
          </Nav>
          <Flex>
            <h1>SnapMap - Real-time Traffic and Weather Information</h1>
          </Flex>
          </Container>
    </StyledHeader>
  )
}

export default Header
