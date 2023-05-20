import React from 'react'
import { Container } from './styles'
import { Link } from 'react-router-dom'


const SidebarItem = ({Icon,Text,to}) =>{

    return (
            <Container>
                 <Link to={to}>
                <Icon/>
                   {Text}
                </Link> 
            </Container>
    )

}

export default SidebarItem