import styled from "styled-components";
import fundoHome from "../../assets/home/fundoHome.png"
export const Title = styled.h1`
font-size: 50px;
`;
export const Container = styled.div`
justify-content: center;
height: 100%;
width:100%;
background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
url(${fundoHome});
`;
export const Carrosel = styled.div` 
background:  rgba(217, 217, 217, 0.5);
width: 50%;
height: 250px;
margin-top: 5%;
margin-left:25%;
`;
export const Tabela = styled.div`
box-sizing: border-box;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-row-gap: 10px;
justify-content: center;
width: 70%;
height: 37px;
margin-left: 15%;
background: #6B6B6B;
border: 1px solid #000000;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`;
export const DivLogin = styled.div`
display:flex;
margin-left: 35%;
//background: #6B6B6B;
width: 30%;
height: 100px
`;

export const Texto = styled.span` 
  font-size: 20px;
  font-family: "minecraft";
  color: #FFFFFF;
  text-align: center;
  margin-top: 5px;
 
`;
export const BotaoLogin = styled.button`
  background: #6D9948;
  
  //width:5%;
  width: 75px;
  height:40px;
 
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
    font-size: 20px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.075em;
    text-align: center;
  }
`;