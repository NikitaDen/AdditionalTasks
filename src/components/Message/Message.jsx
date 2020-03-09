import React from "react";
import userPhoto from "../../images/avatar.jpg";

let Message = (props) => {
    return (
        <div className='message'>
            <img src={userPhoto} alt="photo" className="user-photo"/>
            <div className="message__body">
                {props.fullName}
                <p>{props.messageText}</p>
                <div className="message__time">{props.messageTime}</div>
            </div>
            <div className="triangle"/>
        </div>
    )
};

export default Message;