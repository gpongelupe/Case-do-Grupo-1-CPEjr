import styled from "styled-components";
import fundoLogin from "../../assets/login/fundologin.jpg";
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

export const Form = styled.form``;

export const DivLogin = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;

`;  

export const Title = styled.p`
  font-size: 128px;
  align-items: center;
  justify-content: space-evenly;
  color: white;
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
  
`;

export const Botao = styled.button`
  max-width: 317px;
  height: 113px;
  font-size: 40px;
  align-items: center;
  justify-content: space-evenly;
  background-color: #6D9948;
  color: white;
  width: 100%;
  
`;

export const DivRedirecionar = styled.div`
  display:flex;
  flex-direction: row;
  font-size: 32px;
  align-items: center;
  justify-content: space-evenly;
  color: white;
  gap: 10px;
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  font-size: 32px;
  align-items: center;
  justify-content: space-evenly;
  color: #6D9948;
`;