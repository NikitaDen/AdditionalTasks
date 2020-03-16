import React from "react";

let NamesInput = (props) => {

    const handleEnter = (e) => {
        if (e.key === 'Enter') {

            if (!props.text) {
                return null;
            }

            props.onClickEvent();
            props.setText('');
        }
    };

    const setNewText = (e) => {
        props.setText(e.currentTarget.value);
        props.setCls('validate');
    };

    const setClassName = () => {
        let clsName = !props.text ? 'non-validate' : 'validate';
        props.setCls(clsName);
    };

    return (
        <input className={props.cls} onBlur={setClassName} type="text" value={props.text} placeholder={'Input name...'}
               onKeyDown={handleEnter} onChange={setNewText}/>
    )
};

export default NamesInput;