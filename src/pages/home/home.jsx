import {Container, Form,Carrosel,DivLogin,BotaoLogOut,Input,BotaoLogin,Tabela,
   Cabecalho,Texto,LinhaTabela,MembroTabela,NomeStatus,TextoTabela,
   TextoStatus,FundoCronometro,TextoCronometro,Cargo,Tempo} from "./styles"
import { useState,useEffect } from "react";
import FotoPerfil from "../../assets/home/FotoPerfil.png"
import IcLogOut from "../../assets/home/logout.png"
import api from "../../services/api";
import useAuthStore from "../../stores/auth";
import Carousel from "../../components/Carosel/carosel";
import Icon from "@ant-design/icons/lib/components/Icon";

export default function Home(){

   const {membros,setMembros}=useState([]);

   const [usuarios,setUsuarios]=useState([]);
   const usuarioAtual = useAuthStore((state) => state.usuario);
   const [sessoes,setSessoes] = useState([]);
   const [login, setLogin] =  useState();
   const [carregando,setCarregando] = useState(false);



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

var dataAtual = new Date();
var horarioBackend = new Date(horas);
var diferenca = dataAtual.getTime() - horarioBackend.getTime();
var diferencaEmSegundos = diferenca / 1000;
return Math.round(diferencaEmSegundos);

   }

   useEffect(()=>{
      getUsuarios()
      getSessoes()
   }, [])


     const HandleSubmit = async(e) => {
/*      console.log(usuarioAtual._id); */

      e.preventDefault();
      try{
      if(usuarioAtual.nome!==login){
         return alert("Nome de usuario incorreto para iniciar sessão")
      }

         const res = await api.post("/sessoes",{id_usuario:usuarioAtual._id});
          alert("Sessão criada!");
         location.reload();
         setCarregando(true);
      }catch (erro){
         console.error(erro);
          alert(erro.response.data.message); 
      }finally{
         setCarregando(false);
      }
   }

   function getID(e){
      const buttonId = e.target.id;
   }

   const Logout = async(e) => {

      const buttonId = e.target.id;
      console.log(buttonId);
       /* e.preventDefault(); */
      try{
         if(buttonId!==usuarioAtual._id){
            return alert("Operação não autorizada")
         }
          const res = await api.delete("/sessoes/"+buttonId); 
          alert("Bom descanço!");
          location.reload();
          setCarregando(true);
       }catch (erro){
          console.error(erro);
           alert(erro.response.data.message); 
       }finally{
          setCarregando(false);
       }
    }

   return(
      
   <Container>

       <Carrosel> 
         <Carousel/>
      </Carrosel> 
      <DivLogin>
      <Form onSubmit={HandleSubmit}>
       <Input placeholder="Nome do membro" onChange={(e)=> setLogin(e.target.value)}></Input>     
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
                        {Math.round((getHoras(secao.createdAt)/60))+":"+(((getHoras(secao.createdAt)%60)*60)/100).toFixed(0)}
                  </TextoCronometro> 
               </FundoCronometro>
               
               <BotaoLogOut onClick={(e)=>Logout(e)} id={secao.id_usuario._id}/>

            </Tempo> 
            
        </LinhaTabela>  
 ))}
        
      </Tabela>
  
     </Container>
   );
}