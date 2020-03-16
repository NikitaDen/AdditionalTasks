import React, {useState} from "react";
import NamesSpan from "./NamesSpan/NamesSpan";
import NamesButton from "./NamesButton/NamesButton";
import NamesInput from "./NamesInput/NamesInput";
import NamesItem from "./NamesItem/NamesItem";


let Names = () => {
    let [number, setNumber] = useState(0);
    let [text, setText] = useState('');
    let [names, setNames] = useState([]);
    let [validated, setValidated] = useState(true);
    let [cls, setCls] = useState('validate');


    let onClickEvent = () => {
        setNumber(number + 1);
        setNames([...names, {name: text, id: number}]);
        setText('');
    };

    return (
        <div className='names'>
            <NamesSpan number={number}/>
            <NamesInput cls={cls} setCls={setCls} validated={validated} setValidated={setValidated} onClickEvent={onClickEvent} text={text} setText={setText}/>
            <NamesButton cls={cls} setCls={setCls} validated={validated} setValidated={setValidated} onClickEvent={onClickEvent} text={text}/>
            <NamesItem names={names}/>
        </div>
    )
};

export default Names;