import React from "react";

let NamesItem = (props) => {
    return (
        <div>
            {props.names.map(item => {
                return (
                    <div key={item.id} className='names__item'>
                        <h4>{item.name}</h4>
                    </div>
                )
            })}
        </div>
    )
};

export default NamesItem;