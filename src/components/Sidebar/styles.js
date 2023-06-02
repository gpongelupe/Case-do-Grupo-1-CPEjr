import styled from "styled-components";

export const Container = styled.div`
background-color: #567838;
position: fixed;
height: 100%;
top: 0px;
right: 0px;
width: 200px;
z-index: 10;
right: ${props => props.sidebar ? '0' : '-100%'};
animation: showSidebar .4s;

> svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 40px;
    margin-left: 10px;
    cursor: pointer;
}

@keyframes showSidebar{
    from{
        opacity: 0;
        width: 0;
    }
    to{
    opacity: 1;
    width: 300px;
    }
}
`;
export const Content = styled.div`
margin-top: 100px;
`




