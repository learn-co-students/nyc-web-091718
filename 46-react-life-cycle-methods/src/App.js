import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const messageApiAddress =
  "http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages";

class App extends Component {
  state = {
    messages: [],
    newMessageInput: ""
  };

  handleOnChange = event => {
    const inputValue = event.target.value;
    this.setState({ newMessageInput: inputValue });
  };

  componentDidMount() {
    fetch(messageApiAddress)
      .then(r => r.json())
      .then(messages => this.setState({ messages: messages }));
  }

  handleNewMessageCreating = event => {
    event.preventDefault();

    const newMessageValue = this.state.newMessageInput;

    const postConfig = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: { message: newMessageValue, real_name: "//" }
      })
    };

    fetch(messageApiAddress, postConfig)
      .then(r => r.json())
      .then(message => {
        this.setState({
          messages: [message, ...this.state.messages],
          newMessageInput: ""
        });
      });
  };

  render() {
    return (
      <div className="App">
        New message input:
        <form onSubmit={this.handleNewMessageCreating}>
          <input
            type="text"
            value={this.state.newMessageInput}
            onChange={this.handleOnChange}
          />
          <button type="submit">Add message</button>
        </form>
        <br />
        <h1>Messages:</h1>
        {this.state.messages.map(messageObj => (
          <p key={messageObj.id}>{messageObj.message}</p>
        ))}
      </div>
    );
  }
}

export default App;
