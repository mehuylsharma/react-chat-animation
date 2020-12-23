import React, { useState, useEffect } from 'react';

export default function Message(props) {
    const [status, setStatus] = useState(props.message.status);

    useEffect(() => {
        const timer = setTimeout(() => {
            return setStatus(props.message.tempStatus);
        }, Math.round(Math.random()*1000));

        return () => clearTimeout(timer);
    });

    return(
        <div className={`message ${props.message.owner}`}>
            <div className="message-text">
                {props.message.text}
            </div>
            <div className="message-time">
                {props.message.time}
            </div>
            <div className="message-status">
                <img src={status} alt=""/>
            </div>
        </div>
    );
};