import React from "react";
import { data } from "../../Containers/App";

const chat = (props) => {
  const style = {
    width: "50%",
  };

  let chat = data.filter((d) => {
    if (d.name === props.state) {
      return d.chatData;
    }
  });

  //   console.log(chat[0].chatData);
  return (
    <div style={style}>
      {chat[0].chatData.map((c, index) => {
        return <p key={index}>{c}</p>;
      })}
    </div>
  );
};

export default chat;
