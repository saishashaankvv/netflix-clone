import React from 'react';
import Aux from '../../hoc/Auxillary';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const TextAndButtonComponent = (props) => {
    return (
       <Aux classname = {props.classname}> 
        {props.children}
        <ButtonComponent classname = {props.buttonclassname+" "+props.classname+"-button"}>{props.buttontext}</ButtonComponent>
       </Aux>  
    );
}

export default TextAndButtonComponent;