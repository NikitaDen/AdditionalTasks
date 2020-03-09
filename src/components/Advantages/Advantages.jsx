import React from "react";

let Advantages = (props) => {
    return (
        <div className='advantages'>
            <h3>My Advantages</h3>
            <div className={'list'}>
                {props.advantages.map(item => <p key={item.id} className={item.className}>{item.advantage}</p>)}
            </div>
        </div>
    )
};

export default Advantages;