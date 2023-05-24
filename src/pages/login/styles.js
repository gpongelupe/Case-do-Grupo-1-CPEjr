import styled from "styled-components";
import fundoLogin from "../../assets/login/fundoLogin.jpg";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
  url(${fundoLogin});
  background-size: cover;  
`;

export const DivLogin = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  
  div{
      width: 100%;
      height: auto;
      margin-bottom: 50px;
  }
`;  

export const Title = styled.p`
  font-size: 105px;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  margin-bottom: 50px;
`;

export const Text = styled.p`
  font-size: 32px;
  align-items: center;
  justify-content: space-evenly;
  color: white;
`;

export const Input = styled.input`
  font-size: 25px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #D9D9D9;
  color: black;
  width: 100%;
  height: 70px;
  padding-left: 20px;
  @media (max-width: 800px){
  width: 90%;
  height: 70px;
  margin-left: 5%;
  }
  
`;

export const Botao = styled.button`
  max-width: 300px;
  height: 110px;
  font-size: 40px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #6D9948;
  color: white;
  width: 100%;
  &:hover {
    cursor:pointer;
    background-color: #45622D;
    border: none;
  }
  
  
  
`;

export const DivRedirecionar = styled.div`
  display:flex;
  flex-direction: row;
  font-size: 25px;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  /* gap: 10px; */
  width: auto;
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  font-size: 25px;
  align-items: center;
  justify-content: space-evenly;
  color: #6D9948;
`;