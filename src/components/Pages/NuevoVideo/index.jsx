import React from "react";
import styled from "styled-components";
import { useState } from "react";
import CampoTexto from "../../CampoTexto"; 
import ListaOpciones from "../../ListaOpciones"; 
import Boton from "../../Boton"; 
//crear conecion con app

const formulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    text-align: center;
`;

const NuevoVideo = () => {

    const [titulo, actualizarTitulo] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion
        }
        console.log(datosAEnviar)
    }


      return ( 
      <section className="NuevoVideo">
        <form onSubmit={manejarEnvio}>
            <h2>Nuevo Video</h2>
            <h3>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>
            <h4>Crear Tarjeta</h4>
            <CampoTexto
                titulo="Título"
                placeholder="Ingresar el título"
                required
                valor={titulo}
                actualizarValor={actualizarTitulo}
            />
            <ListaOpciones
                titulo="Categoría"
                placeholder="Ingresar Categoría"
                required
                valor={categoria}
                actualizarValor={actualizarCategoria}
            />
            <CampoTexto
                titulo="Imagen"
                placeholder="Ingresar enlace de Imagen (obligatorio)"
                required
                valor={imagen}
                actualizarValor={actualizarImagen}
            />
            <CampoTexto
                titulo="Video"
                placeholder="Ingresar el enlace del video"
                required
                valor={video}
                actualizarValor={actualizarVideo}
            />
            <CampoTexto
                titulo="Descripción"
                placeholder="¿De qué se trata este video?"
                required
                valor={descripcion}
                actualizarValor={actualizarDescripcion}
            />

            <Boton>
                Guardar
            </Boton>
            <Boton>
                Limpiar
            </Boton>
        </form>
    </section>
      )
}

export default NuevoVideo