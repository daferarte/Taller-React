import React, { useContext } from "react";
import { FormContext } from "./Form";

export default (props) => {
    const ctx = useContext(FormContext);

    const addToList = (value, list) =>{
        console.log(":O");
        ctx.setLikes([value].concat(ctx.likes));
    }

    const removeFormList = (value, list) =>ctx.setLikes(ctx.likes.filter(v => v != value));
    return(

        <div>
            <label>
                <input
                    type="checkbox"
                    name="likes[]"
                    onChange={(ev)=> ev.target.checked ? addToList("Ruby"): removeFormList("Ruby")}
                />
                Ruby
            </label>
            <label>
                <input
                    type="checkbox"
                    name="likes[]"
                    onChange={(ev)=> ev.target.checked ? addToList("JavaScript"): removeFormList("JavaScript")}
                />
                JavaScript
            </label>
        </div>
    )
}