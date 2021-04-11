import React, { Component } from "react";
import "./App.css";
import Users from "../Components/Users/Users";
import Chat from "../Components/Chat/Chat";

let data = [
  {
    name: "User1",
    chatData: ["hi", "hello", "how are you", "i am fine"],
  },
  {
    name: "User2",
    chatData: ["hola", "si", "par fa vor", "si"],
  },
  {
    name: "User3",
    chatData: [
      "what are u doing",
      "watching tv. what about you",
      "nothing",
      "ok",
    ],
  },
];

class App extends Component {
  state = {
    person: "User1",
  };

  selectUserHandler = (event) => {
    // console.log("Clicked");
    // console.log(event.target.textContent);
    const value = event.target.textContent;
    // console.log(value);
    this.setState({
      person: value,
    });
  };
  render() {
    return (
      <div className="App">
        <Users click={this.selectUserHandler} />
        <Chat state={this.state.person} />
      </div>
    );
  }
}
export { App, data };
