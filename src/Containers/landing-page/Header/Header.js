import React from "react";
import ImageComponent from "../../../ReusableComponents/ImageComponent/ImageComponent";
import ButtonComponent from "../../../ReusableComponents/ButtonComponent/ButtonComponent";
import TextAndButtonComponent from "../../../ReusableComponents/TextAndButtonComponent/TextAndButtonComponent";
import HeadingComponent from '../../../ReusableComponents/HeadingComponent/HeadingComponent';
import logo from "../../../assets/images/dummyflix-logo.png";
import Aux from "../../../hoc/Auxillary";
import "./Header.scss";
const Header = props => {
    const buttontext = (
        <Aux>
        watch free for 30 days <ion-icon name="arrow-round-forward"></ion-icon>
        </Aux>
    );
  return (
    <Aux classname={props.auxclassname + "__header"}>
      <Aux classname={props.auxclassname + "__header-title"}>
        <ImageComponent
          source={logo}
          alternate="Logo"
          classname={props.auxclassname + "__header-title-logo"}
        />
        <ButtonComponent classname = {"button-red button-small " + props.auxclassname + "__header-title-button"}>Sign In</ButtonComponent>
      </Aux>
      <Aux classname={props.auxclassname+"__header-main"}>
        <TextAndButtonComponent classname={props.auxclassname + "__header-main-content"} buttonclassname = "button-red button-large" buttontext = {buttontext}>
            <HeadingComponent classname = {"heading-primary "+props.auxclassname + "__header-main-primary"}>see what’s next.</HeadingComponent>
            <HeadingComponent classname = {"heading-tertiary "+props.auxclassname + "__header-main-tertiary"}>watch anywhere. cancel at any time.</HeadingComponent>
        </TextAndButtonComponent>
      </Aux>
    </Aux>
  );
};

export default Header;
