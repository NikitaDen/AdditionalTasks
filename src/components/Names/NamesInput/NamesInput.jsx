import React from "react";

let NamesInput = (props) => {
    return (
        <input type="text" value={props.text} placeholder={'Input name...'} onChange={e => props.setText(e.currentTarget.value)}/>
    )
};

export default NamesInput;