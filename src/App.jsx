import React, { Component } from "react";

import List from "./components/list";
import Form from "./components/form";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["take out trash", "write code"],
    };
  }
  handleSubmit = ({ task }) => {
    let new_array = [...this.state.list];
    new_array.push(task);
    this.setState({ list: new_array });
  };
  handleDelete = (task) => {
    const list = this.state.list.filter((l) => l !== task);
    this.setState({ list });
  };
  render() {
    return (
      <div className="head">
        <h1>Todo List</h1>
        <div className="todo-wrapper">
          <Form {...this.state} onSub={this.handleSubmit} />

          <List {...this.state} onDel={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default App;
