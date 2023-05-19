import { Botao, H1 } from "./Styles"
import { Item } from "./Styles";
import { Links } from "./Styles";
import ImageHeader from "../../assets/editar/headerimage.png"
import React from 'react';
import { Link } from "react-router-dom";


export default function Header(){
    return <H1>
                 <Item>
                    <img src={ImageHeader}/>
                   <text>MINECRAFT</text>
                    </Item>                        
                <Links>
                    <Link to="/">Home</Link>
                    <Link to="/cadstro">Cadastro</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/editar">Editar</Link>
                </Links>
                <Botao>
                <button>LOGOUT</button>
                </Botao>                                  
            </H1>   
}