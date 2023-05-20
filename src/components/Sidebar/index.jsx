import React from "react";
import {Container, Content} from './styles'
import{
    FaTimes,
    FaHome,
    FaRegSun,
    FaUserAlt,
    FaIdCardAlt,
    
} from 'react-icons/fa'
import {SlBan} from 'react-icons/sl'

import SidebarItem from '../SidebarItem'  
import SideButton from '../SidebarItem'

const Sidebar = ({active}) => {

    const closeSidebar = ()=>{
        active(false)
    }

    return(

<Container sidebar={active}>
        <FaTimes onClick={closeSidebar}/>
        <Content> 
            <SidebarItem Icon={FaHome} Text="Home"to="/"/>
            <SidebarItem Icon={FaUserAlt} Text="Cadastro"to="/cadastro"/>
            <SidebarItem Icon={FaIdCardAlt} Text="Login"to="/login"/>
            <SidebarItem Icon={FaRegSun} Text="Editar"to="/editar"/>
            <SidebarItem Icon={SlBan}  Text="LogOut" to="/"/>
        </Content>
        </Container>

    )
         

    {/* <Link to="/">Home</Link>
                    <Link to="/cadastro">Cadastro</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/editar">Editar</Link> */}
    }

    export default Sidebar