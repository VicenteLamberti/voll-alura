import Button from "../../components/Button";
import Chart from "../../components/Chart";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Rating from "../../components/Rating";
import Tabela from "../../components/Table";
import Title from "../../components/Title";
import useDadosConsulta from "../../useDadosConsulta";
import useDadosProfissional from "../../useDadosProfissional";

export default function Dashboard(){
    const { data: consultas, error: consultasErro } = useDadosConsulta();
    const { data: profissionais, error: profissionaisErro } = useDadosProfissional();
  
    if(consultasErro || profissionaisErro){
      console.log('ocorreu erro')
    }
    return (
     
     
        <Container>
          <Title>Área Administrativa</Title>
          <Button>Cadastrar especialista</Button>
          <Tabela consultas = {consultas}/>
          <Title image="grafico">Consultas mensais por especialista</Title>
          <Chart profissionais = {profissionais} consultas = {consultas}/>
          <Title image="avaliacao">Avaliações de especialistas</Title>
          <Rating profissionais = {profissionais}/>
        </Container>
  
  
    )
}