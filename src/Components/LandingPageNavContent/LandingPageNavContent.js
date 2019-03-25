import React from "react";
import Aux from "../../hoc/Auxillary";
import ImageComponent from "../../ReusableComponents/ImageComponent/ImageComponent";
const LandingPageNavContent = props => {
  return (
   
      <a
        href={props.navigationid}
        className={props.linkclassname + (props.isactive ? " active" : "")}
        onClick={props.click}
      >
        <ImageComponent
          source={props.imagesource}
          classname={props.imageclassname}
          alternate={props.imagealternate}
        />
        <Aux classname={props.textclassname}>{props.children}</Aux>
      </a>
  
  );
};

export default LandingPageNavContent;
//
