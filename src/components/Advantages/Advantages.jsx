import React from "react";
import userPhoto from "../../images/avatar.jpg";

let Message = (props) => {
    return (
        <div className='message'>
            <img src={userPhoto} alt="photo" className="user-photo"/>
            <div className="message__body">
                {props.fullName}
                <p>{props.messageText}</p>
                <span>{props.messageTime}</span>
            </div>
            <div className='triangle'/>
        </div>
    )
};

export default Message;