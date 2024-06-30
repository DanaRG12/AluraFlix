import "./Boton.css"

const Boton = (props) => {
    return <button className="boton" type={props.type} onClick={props.onClick}>{props.children}</button>
}

export default Boton