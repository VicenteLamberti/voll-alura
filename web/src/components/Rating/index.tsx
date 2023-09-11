// import IProfissional from "../../types/IProfissional";
// import Card from "./Card";

// function Rating({profissionais}:{profissionais: IProfissional[] | null}){
//     return(
//         <section>
//             {profissionais?.map((profissional)=>{
//                 return(
//                     <Card profissional = {profissional}/>
//                 )
//             })}
//         </section>
//     )
// }
// export default Rating;
//Assim é colocando outro return, ai precisa do {}


import styled from "styled-components";
import IProfissional from "../../types/IProfissional";
import Card from "./Card";
import Button from "../Button";
const SectionCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%
`
function Rating({profissionais}:{profissionais: IProfissional[] | null}){
    return(
        <>
            <SectionCard>
                {profissionais && profissionais.length ?
                profissionais.map((profissional) =>

                    <Card profissional={profissional} />

                ) : "Não há avaliações para mostrar" }
            </SectionCard>
            {profissionais && profissionais.length > 4 ?
               <Button>Ver mais</Button>
               : ""
            }
         
        </>
    )
}
export default Rating;