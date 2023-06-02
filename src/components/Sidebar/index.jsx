import React from "react";
import {Container, Content} from './styles'
import { useNavigate } from "react-router-dom";
import{
    FaTimes,
    FaHome,
    FaRegSun,
    FaUserAlt,
    FaIdCardAlt,  
} from 'react-icons/fa'
import {SidebarItem, SidebarButton} from '../SidebarItem'  
import useAuthStore from "../../stores/auth";

   

const Sidebar = ({active}) => {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
    const navigate = useNavigate();
    const logout = () => {
        console.log("teste");
        clearAuth(); navigate("/login");
    }

    const closeSidebar = ()=>{
        active(false)
    }

    return(  
 

<Container sidebar={active}>
        <FaTimes onClick={closeSidebar}/>
        <Content> 
            
            <SidebarItem Icon={FaUserAlt} Text=" Cadastro"to="/cadastro"/>
            <SidebarItem Icon={FaIdCardAlt} Text=" Login"to="/login"/>
            
            {!!usuario &&
            <>
            <SidebarItem Icon={FaHome} Text=" Home"to="/"/>
            <SidebarItem Icon={FaRegSun} Text=" Editar"to="/editar"/>
            <SidebarButton/>  
            </>    
            }
        </Content>
        </Container>

    )
         
        }

 export default Sidebar