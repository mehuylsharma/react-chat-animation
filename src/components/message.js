import React, { useState, useEffect } from 'react';

export default function Message(props) {
    const [status, setStatus] = useState('');

    //Change status from sending to sent
    useEffect(() => {
        const timer = setTimeout(() => {
            return setStatus(props.message.status);
        }, Math.round(Math.random()*1500));

        return () => clearTimeout(timer);
    });

    return(
        <div className={`${props.message.messageClass}`}>
            <div className="message-text">
                {props.message.text}
            </div>
            <div className="message-time">
                {String(new Date(props.message.time).toLocaleTimeString())}
            </div>
            <div className="message-status">
                <img src={status} alt=""/>
            </div>
        </div>
    );
};