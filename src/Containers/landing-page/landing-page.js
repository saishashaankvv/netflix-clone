import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import ClassNames from "../../ClassNames";
import "./landing-page.scss";
import Header from "./Header/Header";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import shortid from "shortid";

class LandingPage extends Component {
  render() {
    return (
      <Aux classname={ClassNames.landingPage}>
        <Header auxclassname={ClassNames.landingPage} />
        <Features mainclassname={ClassNames.landingPage} />
        <Footer
          mainclassname={ClassNames.landingPage}
          footerlist={this.initializeFooterList()}
        >
          <span className = {ClassNames.landingPage + "__footer-top-text"}>Questions? Contact us.</span>
        </Footer>
      </Aux>
    );
  }

  initializeFooterList = () => {
    return [
      {
        key: shortid.generate(),
        listchildren: [
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">FAQ</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Investor Relations</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Privacy</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Speed Test</a>
          }
        ]
      },
      {
        key: shortid.generate(),
        listchildren: [
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Help Center</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Jobs</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Cookie Preferences</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Legal Notices</a>
          }
        ]
      },
      {
        key: shortid.generate(),
        listchildren: [
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Account</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Ways To Watch</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Corporate Information</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Dummyflix Originals</a>
          }
        ]
      },
      {
        key: shortid.generate(),
        listchildren: [
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Media Centre</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Terms of Use</a>
          },
          {
            key: shortid.generate(),
            rendercode: <a href="#nothing">Contact Us</a>
          }
        ]
      }
    ];
  };
}

export default LandingPage;
