import { Container } from './styles/Container.styled'
import { StyledHeader } from './styles/Header.styled'
import {Nav} from './styles/Header.styled'
import {StyledButton as Button} from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'
import {Image} from './styles/Header.styled'
const Header = () => {
  return (
    <StyledHeader>
        <Container>
          <Nav>
            <Image src='./images/SnapMapLogo.png' alt="" />
            <Button>
              View Source Code
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
