import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    const categorias = [
        "Frontend",
        "Backend",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Categoría</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar una categoría</option>
            {categorias.map((categorias, index) => <option key={index} value={categorias}>{categorias}</option>)}
        </select>
    </div>
}

export default ListaOpciones
