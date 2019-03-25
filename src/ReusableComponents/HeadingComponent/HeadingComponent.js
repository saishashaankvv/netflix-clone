import React from 'react';
import './HeadingComponent.scss';

const HeadingComponent = (props) => {
    return (
       <span className={props.classname}> 
        {props.children}
       </span>  
    );
}

export default HeadingComponent;