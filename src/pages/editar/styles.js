import styled from "styled-components";
import fundoMinecraft from "../../assets/editar/fundoMinecraft.jpg"

export const Container = styled.div`
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url(${fundoMinecraft});
    background-size: cover;
`;

export const Title = styled.p`
font-size: 30px;
font-family: "minecraft";
color: #FFFFFF;
text-align: center;
`;