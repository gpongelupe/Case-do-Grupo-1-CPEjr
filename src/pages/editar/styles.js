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
font-size: 30px;
font-family: "minecraft";
color: #FFFFFF;
text-align: center;
`;