import { Container } from './styles/Container.styled'
import { StyledHeader } from './styles/Header.styled'
import {Nav} from './styles/Header.styled'
import {StyledButton as Button} from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'
import {Image} from './styles/Header.styled'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
const Header = () => {
  const [text, count] = useTypewriter({
    words: ["SnapMap Real-time Weather"],
    loop: true,
    typeSpeed: 100,
    delaySpeed: 800,
  })
  return (
    <StyledHeader>
        <Container>
          <Nav>
            <Image src='./images/SnapMapLogo.png' alt="" />
            <a
                style={{ textDecoration: "none", color: "black" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/brennanleez-coder/SnapMap"
              >
            <Button>View Source Code</Button>
            </a>
          </Nav>
          <Flex>
            <h1>{text}</h1>
            <Cursor 
            cursorColor='#F7AB0A'/>
          </Flex>
          </Container>
    </StyledHeader>
  )
}

export default Header
