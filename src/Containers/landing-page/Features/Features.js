import React, { Component } from "react";
import Aux from "../../../hoc/Auxillary";

import NavBarComponent from "../../../ReusableComponents/NavBarComponent/NavBarComponent";
import LandingPageNavContent from "../../../Components/LandingPageNavContent/LandingPageNavContent";

import openDoor from "../../../assets/images/open-door.png";
import watchAnywhere from "../../../assets/images/watch-anywhere.svg";
import priceTag from "../../../assets/images/price-tag.png";

import CancelTab from "../../../Components/CancelTab/CancelTab";
import DevicesTab from "../../../Components/DevicesTab/DevicesTab";
import PriceTab from "../../../Components/PriceTab/PriceTab";
import shortid from "shortid";

import "./Features.scss";

class Features extends Component {
  state = {
    isCancelTab: true,
    isDevicesTab: false,
    isPriceTab: false
  };

  initializeChildren = () => {
    return [
      {
        key: shortid.generate(),
        rendercode: (
          <LandingPageNavContent
            navcontentclassname={
              this.props.mainclassname + "__features-nav-content-list-item"
            }
            navigationid="#cancel"
            linkclassname={
              this.props.mainclassname + "__features-nav-content-link"
            }
            click={() => this.tabSwitchHandler("isCancelTab")}
            imagesource={openDoor}
            imageclassname={
              this.props.mainclassname + "__features-nav-content-logo"
            }
            imagealternate="Cancel Anytime"
            textclassname={
              this.props.mainclassname + "__features-nav-content-text"
            }
            isactive={this.state.isCancelTab}
          >
            <Aux classname="big-text">
              {" "}
              No Commitments, <br /> Cancel Any time.
            </Aux>
            <Aux classname="small-text"> Cancel</Aux>
          </LandingPageNavContent>
        )
      },
      {
        key: shortid.generate(),
        rendercode: (
          <LandingPageNavContent
            navcontentclassname={
              this.props.mainclassname + "__features-nav-content-list-item"
            }
            navigationid="#cancel"
            linkclassname={
              this.props.mainclassname + "__features-nav-content-link"
            }
            click={() => this.tabSwitchHandler("isDevicesTab")}
            imagesource={watchAnywhere}
            imageclassname={
              this.props.mainclassname + "__features-nav-content-logo"
            }
            imagealternate="Cancel Anytime"
            textclassname={
              this.props.mainclassname + "__features-nav-content-text"
            }
            isactive={this.state.isDevicesTab}
          >
            <Aux classname="big-text">Watch On Any Device.</Aux>
            <Aux classname="small-text">Device</Aux>
          </LandingPageNavContent>
        )
      },
      {
        key: shortid.generate(),
        rendercode: (
          <LandingPageNavContent
            navcontentclassname={
              this.props.mainclassname + "__features-nav-content-list-item"
            }
            navigationid="#cancel"
            linkclassname={
              this.props.mainclassname + "__features-nav-content-link"
            }
            click={() => this.tabSwitchHandler("isPriceTab")}
            imagesource={priceTag}
            imageclassname={
              this.props.mainclassname + "__features-nav-content-logo"
            }
            imagealternate="Cancel Anytime"
            textclassname={
              this.props.mainclassname + "__features-nav-content-text"
            }
            isactive={this.state.isPriceTab}
          >
            <Aux classname="big-text">Pick A Price</Aux>
            <Aux classname="small-text">Price</Aux>
          </LandingPageNavContent>
        )
      }
    ];
  };

  render() {
    return (
      <Aux classname={this.props.mainclassname + "__features"}>
        <Aux classname={this.props.mainclassname + "__features-nav"}>
          <NavBarComponent
            navclassname={this.props.mainclassname + "__features-nav-content"}
            listclassname={
              this.props.mainclassname + "__features-nav-content-list"
            }
            listchildren={this.initializeChildren()}
          />
        </Aux>
        <CancelTab
          isactive={this.state.isCancelTab}
          wrapperclassname={this.props.mainclassname + "__features-nav"}
        />
        <DevicesTab
          isactive={this.state.isDevicesTab}
          wrapperclassname={this.props.mainclassname + "__features-nav"}
        />
        <PriceTab
          isactive={this.state.isPriceTab}
          wrapperclassname={this.props.mainclassname + "__features-nav"}
          tabledata={this.initializeTableData()}
        />
      </Aux>
    );
  }

  setAll = (obj, val) => Object.keys(obj).forEach(k => (obj[k] = val));

  tabSwitchHandler = stateValueToChange => {
    let tempState = this.state;
    this.setAll(tempState, false);
    tempState[stateValueToChange] = true;
    this.setState(tempState);
  };

  oneYearFromNow = currentDate => {
    let d = new Date(currentDate);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear() + 1;
    return [day, month, year].join("/");
  };

  initializeTableData = () => {
    return [
      {
        key: shortid.generate(),
        row: [
          {
            key: shortid.generate(),
            rendercode: null
          },
          {
            key: shortid.generate(),
            rendercode: "MOBILE"
          },
          {
            key: shortid.generate(),
            rendercode: "BASIC"
          },
          {
            key: shortid.generate(),
            rendercode: "STANDARD"
          },
          {
            key: shortid.generate(),
            rendercode: "PREMIUM"
          }
        ]
      },
      {
        key: shortid.generate(),
        row: [
          {
            key: shortid.generate(),
            rendercode:
              "Monthly price after free month ends on " +
              this.oneYearFromNow(new Date())
          },
          {
            key: shortid.generate(),
            rendercode: <span>&#8377; 250</span>
          },
          {
            key: shortid.generate(),
            rendercode: <span>&#8377; 500</span>
          },
          {
            key: shortid.generate(),
            rendercode: <span>&#8377; 650</span>
          },
          {
            key: shortid.generate(),
            rendercode: <span>&#8377; 800</span>
          }
        ]
      },
      {
        key: shortid.generate(),
        row: [
          {
            key: shortid.generate(),
            rendercode: "HD available"
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="close" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="close" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          }
        ]
      },
      {
        key: shortid.generate(),
        row: [
          {
            key: shortid.generate(),
            rendercode: "Ultra HD available"
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="close" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="close" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="close" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          }
        ]
      },
      {
        key: shortid.generate(),
        row: [
          {
            key: shortid.generate(),
            rendercode: "Screens you can watch at the same time. "
          },
          {
            key: shortid.generate(),
            rendercode: <span>1</span>
          },
          {
            key: shortid.generate(),
            rendercode: <span>1</span>
          },
          {
            key: shortid.generate(),
            rendercode: <span>2</span>
          },
          {
            key: shortid.generate(),
            rendercode: <span>4</span>
          }
        ]
      },
      {
        key: shortid.generate(),
        row: [
          {
            key: shortid.generate(),
            rendercode: "Unlimited Films and TV Programmes"
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          }
        ]
      },
      {
        key: shortid.generate(),
        row: [
          {
            key: shortid.generate(),
            rendercode: "Cancel Anytime"
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          }
        ]
      },
      {
        key: shortid.generate(),
        row: [
          {
            key: shortid.generate(),
            rendercode: "First Month Free"
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          },
          {
            key: shortid.generate(),
            rendercode: (
              <span>
                <ion-icon name="checkmark" />
              </span>
            )
          }
        ]
      }
    ];
  };
}

export default Features;
