import Button from '../Button'
import { HeaderContainer, Title, GridLinks } from './styles'

const Header = () => {
    return(
        <HeaderContainer>
            <Title>Portifólio</Title>
            <GridLinks>
                <a href='#'>projetos</a>
                <a href='#'>habilidades</a>
                <a href='#'>contato</a>
            </GridLinks>
            <Button>Contratar</Button>
        </HeaderContainer>
    )
}

export default Header