import React from "react";

let NamesButton = (props) => {

    const handleEvent = () => {
        if (!props.text) {
            let clsName = !props.text ? 'non-validate' : 'validate';
            props.setCls(clsName);
        } else {
            props.onClickEvent();
        }
    };

    return (
        <button onClick={handleEvent}>Press</button>
    )
};

export default NamesButton;