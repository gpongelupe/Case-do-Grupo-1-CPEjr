//import { text } from "stream/consumers";
import {Container, Title, Texto, MeuBotao, Input, Organizar, Item, DivAranha, TextoBotao} from "./styles"
import aranha from "../../assets/editar/aranha.png"

export default function Editar(){
   return(
   <Container>
      <Title>O que deseja editar?</Title>
      <Organizar>
   <Item>
      <Texto>Nome:</Texto> <Input placeholder=" Digite seu novo Nome">
         </Input><MeuBotao><TextoBotao>Editar! </TextoBotao></MeuBotao>
         </Item>
         <Item>
      <Texto>Cargo:</Texto> <Input placeholder=" Digite seu novo Cargo">
         </Input><MeuBotao><TextoBotao>Editar! </TextoBotao></MeuBotao>
         </Item>
         <Item>
      <Texto>Status:</Texto> <Input placeholder=" Digite seu novo Status">
         </Input><MeuBotao><TextoBotao>Editar! </TextoBotao></MeuBotao>
         </Item>
         </Organizar>
   <DivAranha>

   <img src={aranha} />
      
      </DivAranha>
     </Container>
   );
}