import { Botao, H1 } from "./Styles"
import { Item } from "./Styles";
import { Links } from "./Styles";
import { Hamburguer } from "./Styles";
import ImageHeader from "../../assets/editar/headerimage.png"
import ImgHamburguer from "../../assets/editar/menuhamburguer.png"
import React from 'react';
import {useState} from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { FaBars } from 'react-icons/Fa'; 



const Header = ()=>{
    
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)

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
                <Hamburguer> 
                    <FaBars onClick={showSidebar}/>
                    {sidebar && <Sidebar active={setSidebar}/>}    
                </Hamburguer>
                <Botao>
                <button>LOGOUT</button>
                </Botao>                                  
            </H1>   
}
export default Header