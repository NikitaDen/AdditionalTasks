import React, {useEffect, useState} from "react";

let NamesInput = (props) => {

    let [text, setText] = useState('');

    useEffect(() => {
        props.subscribe(addName);
    }, [text]);

    const addName = () => {
        if (!text) {
            return null;
        }
        props.addName(text);
        setText('');
    };

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
           addName();
        }
    };

    const setClassName = () => {
        let clsName = !text ? 'non-validate' : 'validate';
        props.setCls(clsName);
    };

    return (
        <input className={props.cls} onBlur={setClassName} type="text" value={text} placeholder={'Input name...'}
               onKeyDown={handleEnter} onChange={(e) => setText(e.currentTarget.value)}/>
    )
};

export default NamesInput;