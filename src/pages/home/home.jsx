import {Container, Title,BotaoLogin,Input} from "./styles"

export default function Home(){
   return(
   <Container>
      <Title></Title>
      <div>
      <Input placeholder="Nome do usuário"></Input>
      <BotaoLogin>Login</BotaoLogin>
      </div>
      
     </Container>
   );
}