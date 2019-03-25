import React from "react";
import TextAndButtonComponent from "../../ReusableComponents/TextAndButtonComponent/TextAndButtonComponent";
import ImageComponent from "../../ReusableComponents/ImageComponent/ImageComponent";
import Aux from "../../hoc/Auxillary";
import cancel from "../../assets/images/cancel.JPG";
const CancelTab = props => {
  const canceltab = props.isactive ? (
    <Aux classname={props.wrapperclassname + "-cancel-tab"}>
      <TextAndButtonComponent
        classname={props.wrapperclassname + "-cancel-tab-content"}
        buttonclassname="button-red button-medium"
        buttontext="watch free for 30 days"
      >
        If you decide Dummyflix isn't for you – no problem.
        No commitment. Cancel online anytime.
        <br />
      </TextAndButtonComponent>
      <Aux classname={props.wrapperclassname + "-cancel-tab-image"}>
        <ImageComponent source={cancel} alternate="Cancel" />
      </Aux>
    </Aux>
  ) : null;
  return <Aux>{canceltab}</Aux>;
};

export default CancelTab;
