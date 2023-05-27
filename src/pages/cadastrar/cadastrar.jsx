
import { Container, DivResponsividade, DivEsquerda, DivDireita, Titulo, Text, Input, Button} from "./styles";
import imagemCadastro from "../../assets/cadastro/imagemCadastro.png"

export default function Cadastrar(){
   return(
<Container> 
   <DivResponsividade> 
   <DivEsquerda>
   <img src={imagemCadastro} style={{width: '80%', height: '80%'}}/>
   </DivEsquerda>

   <DivDireita>
      <Titulo>Cadastre-se!</Titulo> 
      <Text>Nome:</Text>
      <Input placeholder={' Amanda Fernandes'}/>
      <Text>Email:</Text>
      <Input placeholder={' email@email.com'} type="email"/>
      <Text>Senha:</Text>
      <Input placeholder={' ********'} type="password"/>
      <Text>Confirme a senha:
      </Text>
      <Input placeholder={' ********'} type="password"/>
      <Button 
      onClick={() =>alert("Cadastro realizado com sucesso!")}
      >CADASTRAR</Button>
   </DivDireita>
</DivResponsividade>
</Container>
   );
}