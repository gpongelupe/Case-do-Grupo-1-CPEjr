import {Container, DivLogin, Title, Text, Input, Botao, DivRedirecionar, StyledLink} from "./styles"


export default function Login(){
   return(
   <Container>
      <DivLogin>         
         <Title>LOG IN</Title>
         <div> 
         <Text>e-mail:</Text>
         <Input placeholder = "email@email.com.br"/>  
         </div>

         <div>
         <Text>senha:</Text>
         <Input placeholder = "Insira sua senha"/>
         </div>
         <Botao>LOGIN</Botao>

         <DivRedirecionar>
            <Text>Não tem uma conta?</Text> 
            <StyledLink to="/Cadastro">
                  Cadastre-se agora!
                </StyledLink>               
            </DivRedirecionar>                  
         </DivLogin> 
     </Container>
   );
}
