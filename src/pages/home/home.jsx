import {Container, Form,Title,Carrosel,DivLogin,Input,BotaoLogin,Tabela,
   Cabecalho,Texto,LinhaTabela,MembroTabela,NomeStatus,TextoTabela,
   TextoStatus,FundoCronometro,TextoCronometro,Cargo,Tempo} from "./styles"
import { useState,useEffect } from "react";
import FotoPerfil from "../../assets/home/FotoPerfil.png"
import { ListBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import api from "../../services/api";
import useAuthStore from "../../stores/auth";
export default function Home(){

   const [usuarios,setUsuarios]=useState([]);
   const usuarioAtual = useAuthStore((state) => state.usuario);
   const [sessoes,setSessoes] = useState([]);
   const [login,setlogin]=useState();
   const [id,setId]=useState();
   const [carregando,setCarregando] = useState(false);


//frase.substr(0,11)

   console.log(usuarios);
   const getUsuarios = async() => {
      try{
         const res = await api.get("/usuarios");
         setUsuarios(res.data);
      }catch (erro){
         console.error(erro);
         alert(erro.response.data.message);
      }
   };
   const getSessoes = async() => {
      try{
         const res = await api.get("/sessoes");
         setSessoes(res.data);

      }catch (erro){
         console.error(erro);
         alert(erro.response.data.message);
      }
   };

function getHoras(horas) {
// Obtém o horário atual
var dataAtual = new Date();
// Obtém o horário do backend (exemplo: "2023-05-31T10:30:00")
var horarioBackend = new Date(horas);
// Calcula a diferença em milissegundos
var diferenca = dataAtual.getTime() - horarioBackend.getTime();
// Converte a diferença em segundos
var diferencaEmMinutos = diferenca / 60000;

// Exibe a diferença em segundos
console.log("Diferença em segundos: " + diferencaEmMinutos);
return Math.round(diferencaEmMinutos);
   }

   useEffect(()=>{
      getUsuarios()
      getSessoes()
      getHoras()
   }, [])


     const HandleSubmit = async(e) => {
      e.preventDefault();
      try{
         getId();
         const res = await api.post("/sessoes",{id_usuario:usuarioAtual._id}); 
         setCarregando(true);
      }catch (erro){
         console.error(erro);
          alert(erro.response.data.message); 
      }finally{
         setCarregando(false);
      }
   }
   setInterval(getHoras, 60000);
   return(
      
   <Container>
      <Title></Title>
      <Carrosel></Carrosel>

      <DivLogin>
      <Form onSubmit={HandleSubmit}>
       <Input placeholder="Nome do membro" onChange={(e)=> setlogin(e.target.value)}></Input>     
      <BotaoLogin type="submit">
         Login
      </BotaoLogin>
      </Form>
      </DivLogin>

     <Tabela>
         <Cabecalho>
            <Texto>MEMBRO</Texto>
            <Texto>CARGO</Texto>
            <Texto>TEMPO</Texto>
         </Cabecalho>

 
{sessoes.map((secao)=> ( 
       <LinhaTabela>
            <MembroTabela>
               <img src={FotoPerfil}/>
               <NomeStatus>
                  <TextoTabela>{secao.id_usuario.nome}</TextoTabela>
                  <TextoStatus>{secao.id_usuario.status}</TextoStatus>
               </NomeStatus>
            </MembroTabela>

            <Cargo>
               <TextoTabela>{secao.id_usuario.cargo}</TextoTabela>
            </Cargo>

            <Tempo> 
               <FundoCronometro>
                  <TextoCronometro>
                        {getHoras(secao.createdAt)+"minutos"}
                  </TextoCronometro> 
               </FundoCronometro>
            </Tempo> 
        </LinhaTabela>  
 ))}
        {/* <LinhaTabela>
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
            
        </LinhaTabela> */}
      </Tabela>
  
     </Container>
   );
}