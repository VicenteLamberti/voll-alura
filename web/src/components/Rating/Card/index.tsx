import { Rating } from "@mui/material";
import styled from "styled-components";
import IProfissional from "../../../types/IProfissional";

const ContainerStyled = styled.div`
    flex:40%;
    max-width:100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px
    color: var(--cinza);
    margin: 1em 2em 1em

`

const ListStyled = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`


const ListItemStyled = styled.li`
    list-style-type: none;
`


const ItemInformacoesEstilizado = styled(ListItemStyled)`
    flex-grow: 1;
`


const ImageStyled = styled.img`
    border-radius: 100%;
    width: 64px;
    object-fit: cover;
    height: 64px;
    border: 2px solid var(--azul-claro);
    margin-right: 1em
`


const ParagrafoNomeEstilizado = styled.p`
    font-weight: 700;
`

const ParagrafoEstilizado = styled.p`
    margin: .5em 0;
    font-size: 14px
`
function Card({profissional}:{profissional : IProfissional}){
    return (
        <ContainerStyled>
            <ListStyled>
                <ListItemStyled>
                    <ImageStyled src={profissional.imagem } alt={`Foto do perfil ${profissional.nome}`}/>
                </ListItemStyled>
                <ItemInformacoesEstilizado>
                    <ParagrafoNomeEstilizado>{profissional.nome}</ParagrafoNomeEstilizado>
                    <ParagrafoEstilizado>{profissional.especialidade}</ParagrafoEstilizado>
                </ItemInformacoesEstilizado>
                <ListItemStyled>
                    <Rating name="simple-controlled" value={3} readOnly={true}/>
                </ListItemStyled>
            </ListStyled>

        </ContainerStyled>
    )
}
export default Card;