import styled from 'styled-components';
import facebook from './assets/facebook.png';
import google from './assets/google.png';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';


const FooterStyled = styled.footer`
height: 100%;
color: white;
padding: 1em;
background-color: var(--azul-escuro);
text-align: center
`

const ListStyled = styled.ul`
display: flex;
justify-content: space-around;
width: 10%;
margin: 1em auto;
`
const ItenStyled = styled.li`
list-style-type: none;
`
function Footer() {
    return (
        <FooterStyled>
            <ListStyled>
                <ItenStyled>
                    <a>
                        <img src={facebook} alt="logo do facebook" />
                    </a>
                </ItenStyled>
                <ItenStyled>
                    <a>
                        <img src={google} alt="logo do google" />
                    </a>
                </ItenStyled>
                <ItenStyled>
                    <a>
                        <img src={instagram} alt="logo do instagram" />
                    </a>
                </ItenStyled>
                <ItenStyled>
                    <a>
                        <img src={whatsapp} alt="logo do whatsapp" />
                    </a>
                </ItenStyled>
            </ListStyled>

            <p>2023 Desenvolvido por Vicente | Projeto fícticio</p>
        </FooterStyled>
    )
}

export default Footer;