import {Container,Form, Title, Texto, MeuBotao, Input, Organizar, Item, DivAranha, TextoBotao} from "./styles"
import aranha from "../../assets/editar/aranha.png"
import { useState } from "react";
import useAuthStore from "../../stores/auth";
import api from "../../services/api";

export default function Editar(){
 
   const [nome, setNome] = useState("");
   const [cargo, setCargo] = useState("");
   const [status, setStatus] = useState("");  
   const usuario = useAuthStore((state) => state.usuario);


   const HandleSubmit = async(e) => {
      e.preventDefault();
    
      try{   
         const res = await api.put("/usuarios/"+usuario._id, {nome:nome,status:status,cargo:cargo});
         alert("Alterações feitas!");
         location.reload();
      }catch (erro){
         console.error(erro);
         alert(erro.message);
       }finally{
         
      } 
   };

   return(
   <Container>
      <Title>O que deseja editar?</Title>
      <Organizar>
         <Form onSubmit={HandleSubmit}>
   <Item>
      <Texto>Nome:</Texto> <Input placeholder={usuario.nome} type="nome" id="nome" name="nome" required onChange={(e)=> setNome(e.target.value)}>
      </Input><MeuBotao type="submit"><TextoBotao>Editar! </TextoBotao></MeuBotao>
   </Item>
   <Item>
      <Texto>Cargo:</Texto> <Input placeholder={usuario.cargo} type="cargo" id="cargo" name="cargo" required onChange={(e)=> setCargo(e.target.value)}>
      </Input><MeuBotao type="submit"><TextoBotao>Editar! </TextoBotao></MeuBotao>
   </Item>
   <Item>
      <Texto>Status:</Texto> <Input placeholder={usuario.status} type="status" id="status" name="status" required  onChange={(e)=> setStatus(e.target.value)}>
      </Input><MeuBotao type="submit"><TextoBotao>Editar! </TextoBotao></MeuBotao>
   </Item>
         </Form>
         </Organizar>       
         
      <DivAranha>
         <img src={aranha} /> 
      </DivAranha>
     </Container>
   );
}