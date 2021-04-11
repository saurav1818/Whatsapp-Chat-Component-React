import React from "react";

const user = (props) => {
  return <h3 onClick={props.click}>{props.user}</h3>;
};

export default user;
