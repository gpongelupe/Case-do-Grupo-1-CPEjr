import styled from "styled-components";
import ImgHamburguer from "../../assets/header/menuhamburguer.png"




export const H1 = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 80px;
  width: 100%;
  color: white;
  background: #567838;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.2);
  gap: 15%;
 

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 35%;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15%;
  }

`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  letter-spacing: 2px;
  img {
    width: 65px;
    }  
    @media (max-width: 750px) {
    margin-left: 20px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    color: white;
    margin-right: 8px;
    text-decoration: none;
    letter-spacing: 1px;
    font-size: 15px;
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const Botao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  button {
    font-family: "minecraft"; 
    border: none;
    border-radius: 0px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 9px 16px;
    margin-right: 20px;
    background-color: #6D9948;
    color: white;
    cursor: pointer;
  }

   @media (max-width: 750px) {
    display: none;
  }  
`;



export const Hamburguer = styled.div`

  @media (min-width: 750px) {
     display: none;
  }
 
   
  >svg{

      color: white;
      width: 30px;
      height: 30px;
      margin-top: 20px;
      cursor: pointer;

  }
 
`;