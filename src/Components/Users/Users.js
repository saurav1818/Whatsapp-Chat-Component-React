import React from "react";
import classes from "./Users.module.css";
import { data } from "../../Containers/App";
import User from "../User/User";

const users = (props) => {
  let user = data.map((d, index) => {
    return <User user={d.name} click={props.click} key={index} />;
  });

  //   console.log(user);
  return (
    <div className={classes.mainDiv}>
      <h1>Users</h1>
      {user}
    </div>
  );
};

export default users;
