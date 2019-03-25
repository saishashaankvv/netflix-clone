import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";

class NavBarComponent extends Component {
  render() {
    const nav_list = <nav className = {this.props.navclassname}>{this.renderListItems(this.props.listchildren)}</nav>;
    return <Aux>{nav_list}</Aux>;
  }

  renderListItems = listChildren => {
    return (
      <ul className = {this.props.listclassname}>
        {listChildren.map(function(item) {
          return <li key={item.key}>{item.rendercode}</li>;
        })}
      </ul>
    );
  };
}

export default NavBarComponent;
