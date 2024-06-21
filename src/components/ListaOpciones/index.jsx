import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    const equipos = [
        "Front End",
        "Backend",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categoría</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar una categoría</option>
            {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones