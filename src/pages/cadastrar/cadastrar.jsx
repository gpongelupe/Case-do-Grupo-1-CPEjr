
import { Container, Form,DivEsquerda, DivDireita, Titulo, Text, Input, Button} from "./styles";
import imagemCadastro from "../../assets/cadastro/imagemCadastro.png"
import { useState } from "react";
import api from "../../services/api"
import { useNavigate } from "react-router-dom";


export default function Cadastrar(){

   const [nome, setNome] = useState("");
   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [cargo, setCargo] = useState("");
   const status = " ";
   const navigate = useNavigate();

   const HandleSubmit = async(e) => {
      e.preventDefault();
    
      try{; 
         const res = await api.post("/usuarios", {email,nome,senha,cargo,status}); 
         navigate("/")
      }catch (erro){
         console.error(erro);
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
      <Input placeholder={'ex. João da Silva'} type="nome" id="nome" name="nome" required onChange={(e)=> setNome(e.target.value)}/>
      <Text>Email:</Text>
      <Input placeholder={' email@email.com'} type="email" id="email" name="email" required onChange={(e)=> setEmail(e.target.value)}/>
      <Text>Cargo:</Text>
      <Input placeholder={' ex.Trainee'} type="cargo" id="cargo" name="cargo" required onChange={(e)=> setCargo(e.target.value)}/>
      <Text>Senha:</Text>
      <Input placeholder={' ********'} type="password" id="senha" name="senha" required onChange={(e)=> setSenha(e.target.value)}/>
      {/* <Text>Confirme a senha:
      </Text>
      <Input placeholder={' ********'} type="password"/> */}
      <Button type="submit"
      >CADASTRAR</Button>
      </Form>
   </DivDireita>
</Container>);
}