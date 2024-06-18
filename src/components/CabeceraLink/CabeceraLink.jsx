import styled from "styled-components"
import { Link } from "react-router-dom"


const LinkEstilizado =  styled.link`
    font-size: 18px;
    padding: 1em;
    align-self: end;
    text-transform: uppercase;
    font-weight: 600;
    color: white;
    margin-left: 88px;
    font-size: 1.5rem;
`
function CabeceraLink({url,children}){
    return(
    
        <LinkEstilizado to={url} className={styled.link}>
        {children}
        
        </LinkEstilizado>

    )
}


export default CabeceraLink