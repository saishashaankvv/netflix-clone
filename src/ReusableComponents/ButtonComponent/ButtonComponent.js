import React from 'react';
import './ButtonComponent.scss';

const ButtonComponent = (props) => {
    return (
        <button className = {props.classname} onClick = {props.clicked}>{props.children}</button>
        );
}

export default ButtonComponent;