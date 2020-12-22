import React from 'react';

export function Header(props) {
    return (
        <div className="chat-header">
            <div className="menu-icon"><img src={props.headerInfo.menuIconURL} alt="" /></div>
            <div className="recipent-name">{props.headerInfo.recipentName}</div>
        </div>
    )
}

export function Footer(props) {
    return (
        <div className="chat-footer">
            <img src={props.footerInfo.imageURL} alt="" />
        </div>
    )
}