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


import IProfissional from "../../types/IProfissional";
import Card from "./Card";

function Rating({profissionais}:{profissionais: IProfissional[] | null}){
    return(
        <section>
            {profissionais?.map((profissional)=>
               
                    <Card profissional = {profissional}/>
                
            )}
        </section>
    )
}
export default Rating;