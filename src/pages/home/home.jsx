import {Container, Title,Carrosel,DivLogin,Input,BotaoLogin,Tabela,
   Cabecalho,Texto,LinhaTabela,MembroTabela,NomeStatus,TextoTabela,
   TextoStatus,FundoCronometro,TextoCronometro,Cargo,Tempo} from "./styles"
import { useState,useEffect } from "react";
import FotoPerfil from "../../assets/home/FotoPerfil.png"
import Carousel from "../../components/Carosel/carosel";

export default function Home(){

   const {membros,setMembros}=useState([]);

   return(
   <Container>

      {/* <Title></Title> */}
      <Carrosel> 
         <Carousel/>
      </Carrosel>
      <DivLogin>
         <Input placeholder="Nome do membro"></Input>
         <BotaoLogin onClick ={()=> alert("Login realizado com sucesso!")}>
            Login
         </BotaoLogin>
      </DivLogin>

     <Tabela>
         <Cabecalho>
            <Texto>MEMBRO</Texto>
            <Texto>CARGO</Texto>
            <Texto>TEMPO</Texto>
         </Cabecalho>

        <LinhaTabela>
            <MembroTabela>
               <img src={FotoPerfil}/>
               <NomeStatus>
                  <TextoTabela>Laura Lima</TextoTabela>
                  <TextoStatus>Trabalhando enquanto eles dormem...</TextoStatus>
               </NomeStatus>
            </MembroTabela>

            <Cargo>
               <TextoTabela>Gerente</TextoTabela>
            </Cargo>

            <Tempo> 
               <FundoCronometro>
                  <TextoCronometro>
                     04:44
                  </TextoCronometro> 
               </FundoCronometro>
            </Tempo>
            
        </LinhaTabela>

        <LinhaTabela>
            <MembroTabela>
               <img src={FotoPerfil}/>
               <NomeStatus>
                  <TextoTabela>Julia Moraes Lima</TextoTabela>
                  <TextoStatus>Trabalhando enquanto eles dormem...</TextoStatus>
               </NomeStatus>
            </MembroTabela>

            <Cargo>
               <TextoTabela>Dev Líder</TextoTabela>
            </Cargo>

            <Tempo> 
               <FundoCronometro>
                  <TextoCronometro>
                     09:49
                  </TextoCronometro> 
               </FundoCronometro>
            </Tempo>
            
        </LinhaTabela>

        <LinhaTabela>
            <MembroTabela>
               <img src={FotoPerfil}/>
               <NomeStatus>
                  <TextoTabela>Julia Moraes Lima</TextoTabela>
                  <TextoStatus>Trabalhando enquanto eles dormem...</TextoStatus>
               </NomeStatus>
            </MembroTabela>

            <Cargo>
               <TextoTabela>Dev Líder</TextoTabela>
            </Cargo>

            <Tempo> 
               <FundoCronometro>
                  <TextoCronometro>
                     09:49
                  </TextoCronometro> 
               </FundoCronometro>
            </Tempo>
            
        </LinhaTabela>

        <LinhaTabela>
            <MembroTabela>
               <img src={FotoPerfil}/>
               <NomeStatus>
                  <TextoTabela>Julia Moraes Lima</TextoTabela>
                  <TextoStatus>Trabalhando enquanto eles dormem...</TextoStatus>
               </NomeStatus>
            </MembroTabela>

            <Cargo>
               <TextoTabela>Dev Líder</TextoTabela>
            </Cargo>

            <Tempo> 
               <FundoCronometro>
                  <TextoCronometro>
                     09:49
                  </TextoCronometro> 
               </FundoCronometro>
            </Tempo>
            
        </LinhaTabela>
      </Tabela>
  
     </Container>
   );
}