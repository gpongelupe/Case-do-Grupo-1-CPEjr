import { useState } from "react";
import {Container, Form,DivLogin, Title, Text, Input, Botao, DivRedirecionar, StyledLink} from "./styles"
import api from "../../services/api"
import useAuthStore from "../../stores/auth";
import { useNavigate } from "react-router-dom";

export default function Login(){

   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [isLoading, setCarregando] = useState(false);
   const token = useAuthStore((state) => state.token); 
   const setToken = useAuthStore((state) => state.setToken );
   const navigate = useNavigate();
   
   const HandleSubmit = async(e) => {
      e.preventDefault();
   
   try{
      setCarregando(true);
      const res = await api.post("/login", {email, senha});
      const {token} = res.data;   
      setToken(token)
      navigate("/")

   }catch (erro){
      console.error(erro);
       alert(erro.response.data.message); 
   }finally{
      setCarregando(false);
   }
   }

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
         {isLoading && 
         <Text>Carregando...</Text>
         }
         {!isLoading && 
         <Botao type="submit">LOGIN</Botao>
         }
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
