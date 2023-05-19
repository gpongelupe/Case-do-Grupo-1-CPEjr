import styled from "styled-components";
import fundoMinecraft from "../../assets/editar/fundoMinecraft.jpg"

export const Container = styled.div`
//position:fixed;
  padding:0;
  margin:0;
  top:100px;
  left:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
  url(${fundoMinecraft});
  background-size: cover;  
`;
export const Title = styled.p`
  font-family: "minecraft";
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 170px;
  margin-top: 50px;
  font-size: 60px;
  font-weight: 500;
  line-height: 65px;
  letter-spacing: 0.075em;
`;
export const Texto = styled.span` 
  font-size: 30px;
  font-family: "minecraft";
  color: #FFFFFF;
  text-align: left;
  margin-top: 15px;
  margin-right: 10px;

  @media (max-width: 700px) {
   font-size: 10px;
  }
`;
export const MeuBotao = styled.button`
  background: #6D9948;
  border: none;
  width:215px;
  height:62px;
  &:hover {
    cursor:pointer;
    background-color: #45622D;
    border: none;
  }
`;
export const Input = styled.input`
  background: #FFFFFF;
  width:398px;
  height:63px;
  text-align: center;
  font-family: "minecraft";
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.075em;
  color:#6D9948;
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
export const Organizar = styled.div`   
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 85px;
  margin-left: 70px;
`;
export const DivAranha = styled.div`
display: flex;
  width: 100%;
  height: 430px;
  justify-content: right;
  padding-right: 10%;
  padding-bottom: 5%;
`;