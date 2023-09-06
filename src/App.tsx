
import './App.css';
import Chart from './components/Chart';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Rating from './components/Rating';
import Tabela from './components/Table';
import Title from './components/Title';
import useDadosConsulta from './useDadosConsulta';
import useDadosProfissional from './useDadosProfissional';

function App() {
  const { data: consultas, error: consultasErro } = useDadosConsulta();
  const { data: profissionais, error: profissionaisErro } = useDadosProfissional();

  if(consultasErro || profissionaisErro){
    console.log('ocorreu erro')
  }
  return (
    <>
      <Header/>
      <Container>
        <Title>Área Administrativa</Title>
        <Tabela consultas = {consultas}/>
        <Chart profissionais = {profissionais} consultas = {consultas}/>
        <Rating profissionais = {profissionais}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
