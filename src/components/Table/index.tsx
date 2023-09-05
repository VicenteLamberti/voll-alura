import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsulta from "../../types/IConsulta";
import useDadosConsulta from "../../useDadosConsulta";

function Tabela({consultas} : {consultas : IConsulta[] | null}){




    return(
        <>
            <TableContainer>
                <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map(linha=>
                     
                            <TableRow>
                            <TableCell component="th" scope="row">{new Date(linha.data).toLocaleDateString()}</TableCell>
                            <TableCell >{linha.horario}</TableCell>
                            <TableCell >{linha.profissional[0].nome}</TableCell>
                            <TableCell >{linha.profissional[0].especialidade}</TableCell>
                            <TableCell >{linha.paciente}</TableCell>
                            <TableCell >{linha.modalidade}</TableCell>
                        </TableRow>
                        
                        )}
                      
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;