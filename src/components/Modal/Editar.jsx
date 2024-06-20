import React from "react";

function Editar() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(evt) {
    /*
      Previene el comportamiento default de los
      formularios el cual recarga el sitio
    */
    evt.preventDefault();
    const { target } = evt;
    const { name, value } = target;
 /*
      Este snippet:
      1. Clona el estado actual
      2. Reemplaza solo el valor del
         input que ejecutó el evento
    */
         const newValues = {
            ...values,
            [name]: value,
          };
      
          // Sincroniza el estado de nuevo
          setValues(newValues);
        }
      
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </form>
        );
      }
    export default Editar
    