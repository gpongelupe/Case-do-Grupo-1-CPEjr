import { useState } from "react";
import {Container, Form,DivLogin, Title, Text, Input, Botao, DivRedirecionar, StyledLink} from "./styles"
import api from "../../services/api"

export default function Login(){

   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [isLoading, setCarregando] = useState(false);

   const HandleSubmit = async(e) => {
      e.preventDefault();
   };

   try{
      setCarregando(true);
      const res = api.post("/login", {email, senha});
   }catch (erro){
      alert(erro.message);
   }finally{
      setCarregando(false);
   }

   if (isLoading) return (<Container>
      <h1>Carregando...</h1>
   </Container>
   )
   return(
   <Container>
      <Form onSubmit={HandleSubmit}>
      <DivLogin>         
         <Title>LOG IN</Title>
         <div> 
         <Text>e-mail:</Text>
         <Input placeholder = "email@email.com.br" type="email" id="email" name="email" required onChange={(e)=> setEmail(e.target.value)}/>  
         </div>

         <div>
         <Text>senha:</Text>
         <Input placeholder = "Insira sua senha" type="password" id="senha" name="senha" required onChange={(e)=> setSenha(e.target.value)}/>
         </div>
         <Botao type="submit">LOGIN</Botao>

         <DivRedirecionar>
            <Text>Não tem uma conta?</Text> 
            <StyledLink to="/Cadastro">
                  Cadastre-se agora!
                </StyledLink>               
            </DivRedirecionar>                  
         </DivLogin> 
         </Form>
     </Container>
   );
}