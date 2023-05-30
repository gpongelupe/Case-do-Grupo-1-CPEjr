import styled from "styled-components";
import backGroundCadastro from "../../assets/cadastro/backGroundCadastro.png"


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backGroundCadastro});
  background-size: cover;
  
 
`;
export const DivResponsividade = styled.div`
  display:flex;
  height: 100%;
  width: 100%;
  background: transparent;
   
  @media (max-width: 700px){
    flex-direction: column-reverse; 
  }
`;
export const DivEsquerda = styled.div `
  height: 100vh;
  width: 50%;
  @media (max-width: 700px){
    width:100%;
    height:auto;
    justify-content: center;
    @media (max-width:500px){
      width:100%;
    justify-content: center;
    height:90vh;
    }
  }
`;
export const DivDireita = styled.div `
  height: 100vh;
  width: 50%;
  @media (max-width:700px){
    width:100%;
    height: auto;
    justify-content:center;
  }
`;
export const Titulo = styled.p`
  color: #FFFFFF;
  font-size: 40px;
  font-family: minecraft; 
  margin-left:30%;
  margin-top: 4%;
  margin-bottom: 2%;
  @media (max-width:700px) {
    margin-left: 20%;
    justify-content:center;
  }
  @media (max-width:500px){
    font-size: 25px;
    margin-left: 10%;
  }
    
`;
export const Text = styled.p`
  font-size: 20px;
  font-family: minecraft;
  color: #FFFFFF;
  margin-left: 10%;
  @media (max-wight:700px){
    font-size:17px;
  }
`;
export const Input= styled.input`
  background: #FFFFFF;
  padding-left: 15px;
  font-family: minecraft;
  font-size: 18px;
  margin-left: 10%;
  margin-bottom: 4.5%;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 43px;
  width: 80%;
  ::placeholder{
    color: #BEB8B8;
    @media (max-width:500px){
      padding-left: 10px;
      height:38px;
    }
  }
`;
export const Button = styled.button`
  background-color: #6D9948;
  width: 30%;
  height: 60px;
  color: #FFFFFF;
  font-family: minecraft;
  font-size: 20px;
  margin-left: 35%;
  border-color: #6D9948;
  &:hover {
    cursor:pointer;
    background-color: #45622D;
    border: none;
  }

  @media (max-width: 885px){
    font-size: 18px;
  }
  @media (max-width: 770px){
    font-size: 16px;
  }
  @media (max-width: 692px){
    font-size: 14px;
  }
  @media (max-width: 607px){
    font-size: 12px;
  }
`;


