import React, { useEffect } from "react";

export default (props) => {
    useEffect(()=>{
        import("./hello").then(mod => mod.default()); //promesa que retorna la funcion //revisar chunk
      },[]);
    return(
        <div>
            <p>Sorpresa</p>
        </div>
    )
}