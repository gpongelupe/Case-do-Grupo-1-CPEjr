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
  align-items: center;
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 170px;
  margin-top: 50px;
  font-size: 60px;
  font-weight: 500;
  line-height: 65px;
  letter-spacing: 0.075em;

  @media (max-width: 820px) {
   width: 100%;
   height: 0;
   font-size: 30px;
   text-align: center;
  }
`;
export const Texto = styled.p` 
  font-size: 30px;
  font-family: "minecraft";
  color: #FFFFFF;
  text-align: center;
  margin-top: 15px;
  margin-right: 10px;

  @media (max-width: 700px) {
  width: 2%;
  height: 40px;
  font-family: 'Minecraft';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.075em;
  text-align: center;
}



 @media (max-width: 900px) {
  width: 2%;
  height: 40px;
  font-family: 'Minecraft';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.075em;
  text-align: center;
  padding-bottom:4%;

} 
@media (max-width: 290px) {
  width: 5px;
  height: 20px;
  font-family: 'Minecraft';
  font-style: normal;
  font-weight: 100;
  font-size: 11px;
  line-height: 22px;
  display: flex;
  align-items: left;
  letter-spacing: 0.075em;
}
`;
export const TextoBotao = styled.p`
display:flex;
   font-size: 30px;
   font-family: "minecraft";
   color: #FFFFFF;
   justify-content: center;
  align-items: center;
  text-align: center;
 justify-self: center;
  @media (max-width: 900px) {
  width: 2%;
  height: 40px;
  font-family: 'Minecraft';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.075em;
  text-align: center;
  padding-bottom:4%;


} 
@media (max-width: 290px) {
  width: 5px;
  height: 20px;
  font-family: 'Minecraft';
  font-style: normal;
  font-weight: 100;
  font-size: 11px;
  line-height: 22px;
  display: flex;
  align-items: left;
  letter-spacing: 0.075em;
}
`;
export const MeuBotao = styled.button`
display:flex;
  background: #6D9948;
  border: none;
  width:215px;
  height:62px;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:hover {
    cursor:pointer;
    background-color: #45622D;
    border: none;
  }

  @media (max-width: 900px) {
    width: 20%;
    height: 47px;
   //margin-left: 15%;
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

  @media (max-width: 900px) {
     margin-left: 15%; 
width: 50%;
height: 47px;

::placeholder {
    color: #BEB8B8;
    font-family: "minecraft";
    font-size: 55%;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.075em;
    text-align: center;
  }
  }

  @media (max-width: 290px) {
    margin-left: 11%;
width: 50%;
height: 47px;
::placeholder {
    color: #BEB8B8;
    font-family: "minecraft";
    font-size: 40%;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.075em;
    text-align: center;
  }
  }

`;
export const Organizar = styled.div`   
  @media (max-width: 700px) {
    margin-bottom: 10%;
    margin-top: 40%;
}
`;
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 85px;
  margin-left: 70px;
  @media (max-width: 820px) {
    margin-top: 10%;
    margin-left: 12%
  }
`;
export const DivAranha = styled.image`
display: flex;
  width: 100%;
  height: 600px;
  justify-content: right;
  padding-right: 10%;
  padding-bottom: 5%;
  @media (max-width: 1290px) {
    display: flex;
  width: 100%;
  height:250px;
  justify-content: right;
  padding-right: 10%;
  padding-bottom: 5%;
  }
  @media (max-width: 290px) {
    display: flex;
  width: 100%;
  height:180px;
  justify-content: right;
  padding-right: 10%;
  padding-bottom: 10%;
  margin-top: 10%;

  }
`;