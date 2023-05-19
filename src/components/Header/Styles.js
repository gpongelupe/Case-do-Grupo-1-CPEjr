import styled from "styled-components";
import ImgHamburguer from "../../assets/editar/menuhamburguer.png"


export const H1 = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30%;
  padding-left: 15px;
  min-height: 80px;
  color: white;
  background: #567838;
 

    @media (max-width: 1300px) {
    gap: 20%;
    text-align: center; 
  }  

  @media (max-width: 950px) {
    gap: 10%;
    text-align: center; 
  } 
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5%
  }


`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  img {
    width: 65px;
    }

    font-size: 20px;
    letter-spacing: 2px;
    
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
    background-color: #6D9948;
    color: white;
    cursor: pointer;
  }

   @media (max-width: 550px) {
    margin-bottom: 10px;
    font-size: 10px;
  }  
`;



export const Hamburguer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    src: url(${ImgHamburguer});
    width: 50px;
    height: 50px;
  }

    font-size: 20px;
    letter-spacing: 2px;
    
`;