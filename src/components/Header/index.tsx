import logo from './assets/logo.png';
import perfil from './assets/perfil.png';

function Header(){
    return (
        <header>
            <img src={logo} alt="Logo da página"/>
            <div>
                <img src={perfil} alt="Foto do perfil do usuário"/>
                <a href="#">Sair</a>
            </div>

        </header>
    )
}