import { Botao, H1 } from "./Styles"
import { Item } from "./Styles";
import { Links } from "./Styles";
import { Hamburguer } from "./Styles";
import ImageHeader from "../../assets/header/headerimage.png"
import React from 'react';
import {useState} from 'react';
import { Link} from "react-router-dom";
import Sidebar from "../Sidebar";
import { FaBars } from 'react-icons/fa'; 
import useAuthStore from "../../stores/auth";



export default function Header(){

    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
  
    
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)

    return <H1>
                 <Item>
                    <img src={ImageHeader}/>
                   MINECRAFT
                    </Item>                       
                <Links>  
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/login">Login</Link>
                {!!usuario && 
                <>
                    <Link to="/">Home</Link>
                    <Link to="/editar">Editar</Link>
                </>
                }     
                </Links>  
                <Hamburguer> 
                    <FaBars onClick={showSidebar}/>
                    {sidebar && <Sidebar active={setSidebar}/>}    
                </Hamburguer>
                {!!usuario && 
                <Botao>
                <button type ="button" onClick={clearAuth}>LOGOUT</button>
                </Botao>
                }
                                                  
            </H1>   
}
