import React from "react";
import styled from "styled-components"
import { useState } from "react";
import CampoTexto from "../../CampoTexto"; 
import ListaOpciones from "../../ListaOpciones";
import api from "../../../api"; 
import Boton from "../../Boton"; 
import "./NuevoVideo.css"

const NuevoVideo = () => {

    const [titulo, actualizarTitulo] = useState("")
    const [categoria, actualizarCategoria] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripcion] = useState("")

    const limpiarFormulario = () => {
        actualizarTitulo("");
        actualizarCategoria("");
        actualizarImagen("");
        actualizarVideo("");
        actualizarDescripcion("");
    };

    const manejarEnvio = (e) => {
        e.preventDefault()
               let datosAEnviar = {
                 titulo,
                 categoria,
                 imagen,
                 video,
                 descripcion
        }
        console.log(datosAEnviar)

api.post('', datosAEnviar)
    .then(response => {
        console.log('Video creado:', response.data);
       
    })
    .catch(error => {
        console.error('Error al crear el video:', error);
    });
};

      return ( 
      <section className="NuevoVideo">
        <form onSubmit={manejarEnvio}>
            <h2>NUEVO VIDEO</h2>
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
            <Boton type="button" onClick={limpiarFormulario}>
                Limpiar
            </Boton>
        </form>
    </section>
      )
}

export default NuevoVideo