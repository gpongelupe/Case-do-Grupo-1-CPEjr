import styled from "styled-components";
import fundoHome from "../../assets/home/fundoHome.png"

export const Title = styled.h1`
  font-size: 50px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width:100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
  url(${fundoHome});
  padding-bottom: 70px;
  background-size: cover;  
  align-items: center;
`;

export const Form = styled.form``

export const Carrosel = styled.div` 
/* display: flex; */
  background:  rgba(217, 217, 217, 0.5);
  width: 1000px;
  height: 400px;
  margin-top: 5%;
  /* margin-left:25%; */
  align-self:center;
  justify-self: center;

  @media (max-width: 820px){
  width: 50%;
  height: 200px;
  }
`;

export const Tabela = styled.div`
  display:flex;
  flex-direction: column;
  height: auto;
  width: 70%;
  /* margin-left: 15%; */

  @media (max-width: 800px){
  width: 90%;
  height: 200px;
  margin-left: 5%;
  }
`;

export const Cabecalho = styled.div`
  box-sizing: border-box;
  display:grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-row-gap: 10px;
  justify-content: center;
  padding-left: 60px;
  width: 100%;
  height: 50px;
  align-content: center;
  background: #3C3636;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 820px){
    height: 40px;
  }
  @media (max-width: 340px){
   
   grid-template-columns: 1fr 2fr 2fr;
  }
`;

export const LinhaTabela =styled.div`
  box-sizing: border-box;
  display:grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-row-gap: 10px;
  flex-direction: row;

  height: 94px;
  width: 100%;
  padding-left: 60px;
  background: #6B6B6B;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 820px){
    height:70px;

  }
  @media (max-width: 700px){
    height:70px;
    padding-left: 50px;
  }
  @media (max-width: 600px){
    height:70px;
    padding-left: 30px;
  }
  @media (max-width: 500px){
    height:70px;
    padding-left: 10px;
  }

`;

export const MembroTabela =styled.div`
  display:flex;
  flex-direction:row;
  height:70px;
  margin-top:3%;
  @media (max-width: 820px){
    height:60px;
    margin-top:2%;
  }
  @media (max-width: 750px){
    height:50px;
  }
  @media (max-width: 460px){
    height:40px;
  }
  
`;

export const DivLogin = styled.div`
  display:flex;
  /* margin-left: 35%; */
  //background: #6B6B6B;
  width: auto;
  height: 100px;
`;

export const Texto = styled.span` 
  font-size: 20px;
  font-family: "minecraft";
  color: #FFFFFF;
  text-align: center;
  margin-top: 5px;

  @media (max-width: 820px){
    font-size: 15px;
  }
  @media (max-width: 500px){
    font-size: 13px;
  }
 
`;
export const BotaoLogin = styled.button`
  background: #6D9948;
  width: 75px;
  height:40px;
  font-family: "minecraft";
  margin-top: 10%;
  margin-left: 5%;
  border: 1px solid #567838;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #FFFFFF;
  font-size: 200%;
    font-weight: 500%;
    line-height: 10%;
    letter-spacing: 0.075em;
    text-align: center;
  &:hover {
    cursor:pointer;
    background-color: #45622D;
    border: none;
    font-size: 20px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.075em;
    text-align: center;
  }
  @media (max-width: 820px){
    width: 60px;
    height:30px;
  }
`;

export const Input = styled.input`
  background: #6B6B6B;
  width:60%;
  height:40px;
  text-align: center;
  font-family: "minecraft";
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.075em;
  margin-top: 10%;
  border: 1px solid #000000;
  color:#BEB8B8;
  ::placeholder {
    color: #BEB8B8;
    font-family: "minecraft";
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.075em;
    text-align: center;
  }
  @media (max-width: 1000px){
    ::placeholder {

    font-size: 18px;
    }
  }
  @media (max-width: 820px){
    ::placeholder {
      font-size: 14px;
    }
    width: 100%;
    height:30px;
  }
  
`;

export const NomeStatus = styled.div`
  width: 100%;

`;

export const TextoTabela = styled.div`
  font-size: 20px;
  font-family: "minecraft";
  color: #FFFFFF;
  text-align: left;
  align-self:center;
  justify-self:center;
  margin-top: 5px;
  margin-left: 5%;

  @media (max-width: 820px){
    font-size: 12px;
  }
  @media (max-width: 460px){
    font-size: 10px;
  }
  @media (max-width: 400px){
    font-size: 8px;
  }
`;

export const TextoStatus = styled.div`
  font-size: 15px;
  font-family: "minecraft";
  color: #FFFFFF;
  text-align: Left;
  margin-top: 15px;
  margin-left: 5%;
  @media (max-width: 820px){
    font-size: 12px;
    font-family: "minecraft";
  }
  @media (max-width: 460px){
    font-size: 8px;
    font-family: "minecraft";
  }
  @media (max-width: 400px){
    font-size: 8px;
  }
`;

export const FundoCronometro = styled.div`
  display:flex;
  flex-direction:flex;
  align-self:center;
  justify-self:center;
  //width: 25%;
  border: 1px solid #000000;
  width: auto;
  height: auto;
  align-content: center;//centraliza verticalmente
  justify-content: center;//centraliza Horizontalmente
  background: #D9D9D9;  

  @media (max-width: 850px){
    height: 27px;
    width: 40px;
  }
  @media (max-width: 500px){
    width: 40px;
    height: 24px;
  }
`;

export const TextoCronometro = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 22.5129px;

  @media (max-width: 1100px){
    font-size: 20.5129px;

  }
  @media (max-width: 850px){
    font-size: 15.5129px;
    
  }
`;

export const Tempo = styled.div`
  display:flex;
  align-content:center;
  justify-content:center;
  
`;

export const Cargo = styled.div`
  display:flex;
  align-content:center;
  justify-content:center;
 

`;