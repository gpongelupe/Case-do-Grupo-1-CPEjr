
import { Container, Form,DivEsquerda, DivDireita, Titulo, Text, Input, Button} from "./styles";
import imagemCadastro from "../../assets/cadastro/imagemCadastro.png"
import linha from "../../assets/cadastro/linha.png"
import { useState } from "react";
import api from "../../services/api"
// testando commit
export default function Cadastrar(){

   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const status = " ";
   const cargo = " ";

   const HandleSubmit = async(e) => {
      e.preventDefault();
    
      try{;
           const res = await api.post("/usuarios", {email,senha,nome,status,cargo}); 
      }catch (erro){
         alert(erro.message);
       }finally{

      } 
   };


   return(
<Container> 
  
   <DivEsquerda>
   <img src={imagemCadastro} style={{width: '80%', height: '80%'}}/>
   </DivEsquerda>

   <DivDireita> 
   <Form onSubmit={HandleSubmit}>
      <Titulo>Cadastre-se!</Titulo> 
      <Text>Nome:</Text>
      <Input placeholder={' Amanda Fernandes'} type="nome" id="nome" name="nome" required onChange={(e)=> setNome(e.target.value)}/>
      <Text>Email:</Text>
      <Input placeholder={' email@email.com'} type="email" id="email" name="email" required onChange={(e)=> setEmail(e.target.value)}/>
      <Text>Senha:</Text>
      <Input placeholder={' ********'} type="password" id="senha" name="senha" required onChange={(e)=> setSenha(e.target.value)}/>
      <Text>Confirme a senha:
      </Text>
      <Input placeholder={' ********'} type="password"/>
      <Button type="submit"
      >CADASTRAR</Button>
      </Form>
   </DivDireita>
</DivResponsividade>
</Container>
   );
}