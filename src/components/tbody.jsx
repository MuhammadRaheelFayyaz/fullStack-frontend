import React, { useState } from "react";

const Tbody = props => {
  return (
    <>
      <tbody>
        {props.list.map(item => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
              <span>Delete</span> | <span>Edit</span>
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default Tbody;
