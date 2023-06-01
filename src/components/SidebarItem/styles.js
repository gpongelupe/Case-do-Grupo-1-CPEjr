import styled from "styled-components";


export const Container = styled.div`
display: flex;
align-items: center;
font-size: 20px;
color: white;
padding: 10px;
cursor: pointer;
a{  
    color: white;
    text-decoration: none;
    letter-spacing: 1px;
  }


&:hover{
    background-color: #91C763;
}

`;

export const Botao = styled.div`

align-items: center;
justify-content: center;
margin-left: 25%;

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

    &:hover{

}

  }`;



