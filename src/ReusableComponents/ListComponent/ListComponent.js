import React from 'react';

const ListComponent = props => {
    return (
        <ul className = {props.listclassname}>
          {props.listchildren.map(function(item) {
            return <li key={item.key}>{item.rendercode}</li>;
          })}
        </ul>
      );
    ;
};

export default ListComponent;