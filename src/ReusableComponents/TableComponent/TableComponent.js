import React, { Component } from "react";

class TableComponent extends Component {
  render() {
    return (
      <table className = {this.props.tableclassname}>
        <tbody>{this.populateRowsAndColumns(this.props.tabledata)}</tbody>
      </table>
    );
  }

  populateRowsAndColumns = tableData => {
    const props = this.props;
    return tableData.map(function(singlerow) {
      return (
        <tr key={singlerow.key} className={props.tablerowclassname}>
          {singlerow.row.map(function(item) {
            return (
              <td key={item.key} className={props.tableitemclassname}>
                {item.rendercode}
              </td>
            );
          })}
        </tr>
      );
    });
  };
}

export default TableComponent;

/*

[
  {
    "key": 1,
    "row": [
      {
        "key": 1,
        "rendercode": ""
      },
      {
        "key": 2,
        "rendercode": ""
      },
      {
        "key": 3,
        "rendercode": ""
      }
    ]
  },
  {
    "key": 1,
    "row": [
      {
        "key": 1,
        "rendercode": ""
      },
      {
        "key": 2,
        "rendercode": ""
      },
      {
        "key": 3,
        "rendercode": ""
      }
    ]
  }
]

*/
