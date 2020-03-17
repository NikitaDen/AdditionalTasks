import React, {useState} from "react";
import NamesSpan from "./NamesSpan/NamesSpan";
import NamesButton from "./NamesButton/NamesButton";
import NamesInput from "./NamesInput/NamesInput";
import NamesItem from "./NamesItem/NamesItem";


let Names = () => {
    let [number, setNumber] = useState(0);
    let [funcObject, setFuncObject] = useState({addName: () => {}});
    let [names, setNames] = useState([]);
    let [validated, setValidated] = useState(true);
    let [cls, setCls] = useState('validate');

    const subscribe = (func) => {
        setFuncObject({addName: func});
    };

    let addName = (text) => {
        setNumber(number + 1);
        setNames([...names, {name: text, id: number}]);
    };

    return (
        <div className='names'>
            <NamesSpan number={number}/>
            <NamesInput subscribe={subscribe} cls={cls} setCls={setCls} validated={validated} setValidated={setValidated} addName={addName} />
            <NamesButton cls={cls} setCls={setCls} validated={validated} setValidated={setValidated} addName={funcObject.addName}/>
            <NamesItem names={names}/>
        </div>
    )
};

export default Names;