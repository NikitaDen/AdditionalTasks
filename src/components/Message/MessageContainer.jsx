import React from "react";
import Message from "./Message";
import {connect} from "react-redux";

const stateToProps = (state) => {
    return {
        fullName: state.user.fullName,
        messageText: state.user.messageText,
        messageTime: state.user.messageTime,
    }
};

const MessageContainer = connect(stateToProps, null)(Message);

export default MessageContainer;