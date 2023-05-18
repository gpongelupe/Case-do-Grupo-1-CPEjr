//import { text } from "stream/consumers";
import {Container, Title, Texto, MeuBotao, Input} from "./styles"

export default function Editar(){
   return(
   <Container>
      <Title>O que deseja editar?</Title>
      <div>
      <div>
      <Texto>Nome: </Texto> <Input>
         </Input><MeuBotao><Texto>Editar! </Texto></MeuBotao>
      </div><br></br>
      <div>
        <Texto>Cargo: </Texto><Input>
         </Input><MeuBotao><Texto>Editar! </Texto></MeuBotao>
      </div><br></br>
      <div>
      <Texto>Status: </Texto><Input>
         </Input><MeuBotao><Texto>Editar! </Texto></MeuBotao>
      </div><br></br>
   </div>
     </Container>
   );
}