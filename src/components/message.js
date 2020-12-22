import React from 'react';

export default function Message(props) {
    return(
        <div className={`message ${props.message.owner}`}>
            <div className="message-text">
                {props.message.text}
            </div>
            <div className="message-time">
                {props.message.time}
            </div>
            <div className="message-status">
                {props.message.status}
            </div>
        </div>
    );
};