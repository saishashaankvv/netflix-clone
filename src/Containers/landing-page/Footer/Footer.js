import React from "react";
import Aux from "../../../hoc/Auxillary";
import ListComponent from '../../../ReusableComponents/ListComponent/ListComponent';
import './Footer.scss';

const Footer = props => {
    
  const footerdata = props.footerlist.map(function(listitem) {
    return (
      <Aux
        classname={props.mainclassname + "__footer-content"}
        key={listitem.key}
      >
        <ListComponent listclassname={props.mainclassname + "__footer-list"} listchildren = {listitem.listchildren}/>
      </Aux>
    );
  });
  return <Aux classname={props.mainclassname + "__footer"}>{props.children}{footerdata}</Aux>;
};

export default Footer;

/* 
[{
key : shortid.generate(),
listchildren : 
[{
    key : shortid.generate(),
    rendercode : (<a href = "#nothing">FAQ</a>);
},
{
    key : shortid.generate(),
    rendercode : (<a href = "#nothing">Investor Relations</a>);
},
{
    key : shortid.generate(),
    rendercode : (<a href = "#nothing">Privacy</a>);
},
{
    key : shortid.generate(),
    rendercode : (<a href = "#nothing">Speed Test</a>);
}]
}]
*/