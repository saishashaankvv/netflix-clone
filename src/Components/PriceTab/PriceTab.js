import React from "react";
import Aux from "../../hoc/Auxillary";
import TextAndButtonComponent from "../../ReusableComponents/TextAndButtonComponent/TextAndButtonComponent";
import TableComponent from "../../ReusableComponents/TableComponent/TableComponent";
const PriceTab = props => {
  return props.isactive ? (
    <Aux classname={props.wrapperclassname + "-prices-tab"}>
      <TextAndButtonComponent
        classname={props.wrapperclassname + "-prices-tab-content"}
        buttonclassname="button-red button-medium"
        buttontext="watch free for 30 days"
      >
        <Aux
          classname={props.wrapperclassname + "-prices-tab-content-header-text"}
        >
          Choose one plan and watch everything on Dummyflix.
        </Aux>
      </TextAndButtonComponent>
      <Aux classname={props.wrapperclassname + "-prices-tab-content-table-wrapper"}>
        <TableComponent tabledata = {props.tabledata} tableclassname = {props.wrapperclassname + "-prices-tab-content-table-wrapper-table-content"} tablerowclassname={props.wrapperclassname + "-prices-tab-content-table-row"} tableitemclassname = {props.wrapperclassname + "-prices-tab-content-table-row-item"}/>
      </Aux>
    </Aux>
  ) : null;
};

export default PriceTab;
