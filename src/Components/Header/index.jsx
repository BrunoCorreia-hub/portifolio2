import Button from '../Button'
import { HeaderContainer, Title, GridLinks } from './styles'

const Header = () => {
    return(
        <HeaderContainer>
            <Title>Portifólio</Title>
            <GridLinks>
                <a>projetos</a>
                <a>habilidades</a>
                <a>contato</a>
            </GridLinks>
            <Button>Contratar</Button>
        </HeaderContainer>
    )
}

export default Header