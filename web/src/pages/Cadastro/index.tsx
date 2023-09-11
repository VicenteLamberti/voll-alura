import { Step, StepLabel, Stepper } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../components/Header/assets/logo.png';


const Imagem = styled.img`
  padding: 2em 0;
`;

interface PropsCustomizadas{
    cor:string
}
const StepCustomizado = styled.div<PropsCustomizadas>`
    background-color: ${({cor}) => cor};
    width: 16px;
    height: 16px;
    border-radius: 50%;
`


export default function Cadastro() {

    const [etapaAtiva,setEtapaAtiva] = useState('');
    return (

        <>
            <Imagem src={logo} alt="Logo da Voll" />
            <Stepper activeStep={etapaAtiva}>
                <Step>
                    <StepLabel
                        StepIconComponent={(props) => (
                            <StepCustomizado cor={props.active ? 'lightblue' : 'lightgray'} />
                        )}
                    />
                </Step>
                <Step>
                    <StepLabel
                        StepIconComponent={(props) => (
                            <StepCustomizado cor={props.active ? 'lightblue' : 'lightgray'} />
                        )}
                    />
                </Step>
            </Stepper>
        </>

    )
}