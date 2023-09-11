import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png';
import React from 'react';
import styled from 'styled-components';

interface Props {
    image?: string,
    children?: React.ReactNode
}

interface IImages {
    avaliacao: string,
    grafico: string,
    consulta: string
}

const SpanStyled = styled.span<Props>`
background-repeat: no-repeat:
background-position: center;
background-size: cover;
width: 25px;
height: 25px;
background-image: ${props=>props.image ? `url(${props.image})` : 'none'}
`

const TitleStyled = styled.h2`
color: var(--azul-claro);
`

const ContainerStyled = styled.div`
display: flex;
align-items: center;
`

function Title({ image, children }: Props) {

    const listImages: IImages = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta

    }
    return (
        <ContainerStyled>
            {image && <SpanStyled image={listImages[image as keyof IImages]}/>}
            <TitleStyled>{children}</TitleStyled>
        </ContainerStyled>
    )
}

export default Title;