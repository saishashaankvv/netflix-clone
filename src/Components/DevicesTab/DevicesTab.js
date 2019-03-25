import React from "react";
import Aux from "../../hoc/Auxillary";
import TextAndButtonComponent from "../../ReusableComponents/TextAndButtonComponent/TextAndButtonComponent";
import ImageComponent from "../../ReusableComponents/ImageComponent/ImageComponent";
import tv from "../../assets/images/tv.JPG";
import phoneandscreen from "../../assets/images/phone&screen.JPG";
import laptop from "../../assets/images/laptop.JPG";
const DeviceTab = props => {
  return props.isactive ? (
    <Aux classname={props.wrapperclassname + "-devices-tab"}>
      <TextAndButtonComponent
        classname={props.wrapperclassname + "-devices-tab-content"}
        buttonclassname="button-red button-medium"
        buttontext="watch free for 30 days"
      >
        <Aux
          classname={
            props.wrapperclassname + "-devices-tab-content-header-text"
          }
        >
          Watch TV programmes and films at any time, anywhere – personalised for
          you.
        </Aux>
      </TextAndButtonComponent>
      <Aux classname={props.wrapperclassname + "-devices-tab-content-collage"}>
        <Aux
          classname={
            props.wrapperclassname + "-devices-tab-content-collage-component"
          }
        >
          <ImageComponent
            source={tv}
            alternate="Watch on your TV"
            classname={
              props.wrapperclassname +
              "-devices-tab-content-collage-component-image"
            }
          />
      
          <Aux
classname={
  props.wrapperclassname +
  "-devices-tab-content-collage-component-text"
}
>
 Watch on your TV <br/>
          
          <span>Smart TVs, PlayStation, Xbox, Chromecast,<br/> Apple TV,
          Blu-ray players and more.</span>

</Aux>
      </Aux>
      <Aux
        classname={
          props.wrapperclassname + "-devices-tab-content-collage-component"
        }
      >
        <ImageComponent
          source={phoneandscreen}
          alternate="Download for later"
          classname={
            props.wrapperclassname +
            "-devices-tab-content-collage-component-image"
          }
        />
        <Aux
        classname={
          props.wrapperclassname +
          "-devices-tab-content-collage-component-text"
        }
      >
        Watch instantly or download for later.<br/> 
        <span>Available on phone and tablet,
        wherever you go.</span>
      </Aux>
     
      </Aux>
      <Aux
        classname={
          props.wrapperclassname + "-devices-tab-content-collage-component"
        }
      >
        <ImageComponent
          source={laptop}
          alternate="Use any Computer"
          classname={
            props.wrapperclassname +
            "-devices-tab-content-collage-component-image"
          }
        />
        <Aux
        classname={
          props.wrapperclassname +
          "-devices-tab-content-collage-component-text"
        }
      >
        Use any computer <br/><span>Watch on dummyflix.com.</span>
      </Aux>

      </Aux>
    </Aux>
    </Aux>
  ) : null;
};

export default DeviceTab;
