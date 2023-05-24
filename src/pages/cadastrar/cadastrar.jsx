
import { Container, DivEsquerda, DivDireita, Titulo, Text, Input, Button} from "./styles";
import imagemCadastro from "../../assets/cadastro/imagemCadastro.png"
import linha from "../../assets/cadastro/linha.png"

export default function Cadastrar(){
   return(
<Container> 
   <DivEsquerda>
   <img src={imagemCadastro} style={{width: '80%', height: '80%'}}/>
   <img src={linha} className="Linha" style={{display: 'none'}}/>
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

</Container>
   );
}