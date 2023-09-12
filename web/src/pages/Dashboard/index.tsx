import { Modal } from "@mui/material";
import { useState } from "react";
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
import ModalCadastro from "./Modal";

export default function Dashboard(){
    const { data: consultas, error: consultasErro } = useDadosConsulta();
    const { data: profissionais, error: profissionaisErro } = useDadosProfissional();
    const [open, setOpen] = useState(false);
  
    if(consultasErro || profissionaisErro){
      console.log('ocorreu erro')
    }

    const handleOpen = ()=>{
      setOpen(true);
    }

    const handleClose = ()=>{
      setOpen(false);
    }

    return (
       
        <Container>
          <Title>Área Administrativa</Title>
          <Button onClick={()=>handleOpen()}>Cadastrar especialista</Button>
          <ModalCadastro open={open} handleClose={handleClose}/>
          <Tabela consultas = {consultas}/>
          <Title image="grafico">Consultas mensais por especialista</Title>
          <Chart profissionais = {profissionais} consultas = {consultas}/>
          <Title image="avaliacao">Avaliações de especialistas</Title>
          <Rating profissionais = {profissionais}/>
        </Container>
  
  
    )
}