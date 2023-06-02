import React from 'react'
import { Container } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import {Botao} from './styles'
import useAuthStore from '../../stores/auth'


export const SidebarItem = ({Icon,Text,to}) =>{

    return (
            <Container >
                 <Link to={to}>
                <Icon/>
                   {Text}
                </Link> 
            </Container>
    )

}

export const SidebarButton = () =>{

        const clearAuth = useAuthStore((state) => state.clearAuth);
        const navigate = useNavigate();
        const logout = () => {
            console.log("teste");
            clearAuth(); navigate("/login");
        }

    return(

            <Botao>
               <button type ="button" onClick={logout}>LOGOUT</button>
            </Botao>
    )
}
