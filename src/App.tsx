import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Tabela from './components/Table';
import Title from './components/Title';
import useDadosConsulta from './useDadosConsulta';

function App() {
  const { data, error } = useDadosConsulta();
  return (
    <>
      <Header/>
      <Container>
        <Title>Área Administrativa</Title>
        <Tabela consultas = {data}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
