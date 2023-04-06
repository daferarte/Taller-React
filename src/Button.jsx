import React, { useContext } from "react";
import { ThemeContext } from "./App"; //importar el contexto

export default (props) => {
    const context = useContext(ThemeContext); //contexto de temas
    console.log(context);
    return(
        <button
            style={{
                backgroundColor: context.backgroundColor,
                color: context.color
            }}
        >
            clic me
        </button>
    )
}