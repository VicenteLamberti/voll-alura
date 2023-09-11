import styled from "styled-components";
import Atividades from "./Atividades";
import Banner from "./Banner";
import Depoimentos from "./Depoimentos";
import Search from "./Search";



const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`
export default function Home() {
    return (
        <>
            <Banner />
            <Container>
                <Search />
                <Atividades />
                <Depoimentos />
            </Container >
        </>
    )
}