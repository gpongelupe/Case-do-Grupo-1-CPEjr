import styled from "styled-components";
import fundoMinecraft from "../../assets/editar/fundoMinecraft.jpg"

export const Container = styled.div`
background-position: center;
  //background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display:flex;
  flex-direction: column;
  overflow: auto;
background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url(${fundoMinecraft});
 // background-size: cover;
`;
export const Title = styled.p`
  font-size: 50px;
  font-family: "minecraft";
  color: #FFFFFF;
  text-align: center;
`;
export const Texto = styled.span` 
  font-size: 30px;
  font-family: "minecraft";
  color: #FFFFFF;
  text-align: left;
`;
export const MeuBotao = styled.button`
  background: #6D9948;
  border-color: #6D9948;
  width:215px;
  height:62px;
  &:hover {
    background-color: #45622D;
    border-color: #45622D;
  }
`;
export const Input = styled.input`
  background: #FFFFFF;
  width:398px;
  height:62px;
`;