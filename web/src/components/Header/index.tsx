import styled from 'styled-components';
import logo from './assets/logo.png';
import perfil from './assets/perfil.png';
import autenticaStore from '../../stores/autentica.store';
import pesquisa from './assets/search.png';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`

const ContainerStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const LinkStyled = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
`

const LinkEstilizadoDeslogado = styled(LinkStyled)`
font-weight: 400;
text-decoration: none;
color: var(--azul-escuro)
`

const ContainerPesquisa = styled.div`
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 8px 16px;
`;

const SpanCustomizado = styled.span`
  background-image: url(${pesquisa});
  background-repeat: no-repeat;
  width: 25px;
  height: 25px;
background-position: 10px;
`;

const InputCustomizado = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
`;

const BotaoEstilizado = styled.a`
background-color: var(--azul-escuro);
border-radius: 8px;
padding: 12px 16px;
color: var(--branco);
text-decoration: none;
`
function Header(){
    const handleLogout = () => {
        autenticaStore.logout();
    };

    return (
        <HeaderStyled>
            <img src={logo} alt="logo da empresa Voll" />
            <ContainerStyled>
                {autenticaStore.estaAutenticado
                    ? <>
                        <img src={perfil} alt="imagem de perfil do usuário" />
                        <LinkStyled href="/" onClick={handleLogout}>Sair</LinkStyled>
                    </>
                    : <>
                        <LinkEstilizadoDeslogado href="/sobre" >Sobre</LinkEstilizadoDeslogado>
                        <LinkEstilizadoDeslogado href="/cadastro">Cadastre-se</LinkEstilizadoDeslogado>
                        <ContainerPesquisa>
                            <InputCustomizado type="text" placeholder='Digite sua busca' />
                            <SpanCustomizado />
                        </ContainerPesquisa>
                        <BotaoEstilizado href="/login">Entrar</BotaoEstilizado>
                    </>
                }
            </ContainerStyled>
        </HeaderStyled>
    )
}

export default Header;