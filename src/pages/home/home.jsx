import {Container, Title,BotaoLogin,Input, Tabela,Texto, DivLogin,Carrosel} from "./styles"
import { useState,useEffect } from "react";
export default function Home(){

   const {membros,setMembros}=useState([]);
   return(
   <Container>
      <Title></Title>
      <Carrosel></Carrosel>
      <DivLogin>
      <Input placeholder="Nome do membro"></Input>
      <BotaoLogin onClick ={()=> alert("Login realizado com sucesso!")}>
        
         Login
      </BotaoLogin>
      </DivLogin>

      <Tabela>
         <Texto>MEMBRO</Texto>
         <Texto>CARGO</Texto>
         <Texto>TEMPO</Texto>
      </Tabela>
      
     </Container>
   );
}