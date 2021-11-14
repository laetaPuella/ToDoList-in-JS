import "./public/styles.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { task: "", list: [] };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ value: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
  }

  saveLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addTask() {
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    };
    const list = [...this.state.list];
    list.push(newTask);
    this.setState({
      list,
      newTask: ""
    });
  }

  deleteTask(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((task) => task.id !== id);
    this.setState({ list: updatedList });
  }

  render() {
    return (
      <form className="container" onSubmit={this.onFormSubmit}>
        <div className="field">
          <h1 className="title">To Do List</h1>
          <input
            className="input"
            type="text"
            value={this.state.newTask}
            onChange={(e) => this.updateInput("newTask", e.target.value)}
          />
          <button className="add-btn" onClick={() => this.addTask()}>
            <i> + </i>
          </button>
          <br />
          <div className="block">
            <ul>
              {this.state.list.map((task) => {
                return (
                  <dd key={task.id}>
                     <input type='checkbox'/> {task.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteTask(task.id)}
                    >
                      <i> x </i>
                    </button>
                  </dd>
                );
              })}
            </ul>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
