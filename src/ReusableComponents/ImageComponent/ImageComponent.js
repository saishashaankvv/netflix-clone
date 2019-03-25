import React from 'react';

const ImageComponent = (props) => {
    return (
        <img src = {props.source} alt = {props.alternate} className = {props.classname} />
    );
}

export default ImageComponent;