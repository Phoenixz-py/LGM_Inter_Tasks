import Users from "./components/Struct";
import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users_data: [], loading: true };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    document.getElementById("main").style.display = "inline-block";
    const link = "https://reqres.in/api/users?page=1";
    fetch(link)
      .then((response) => response.json())
      .then((users) => {
        this.setState({ users_data: users.data, loading: false });
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
             LGM React App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={this.updateState}
              >
                Fetch All Users
              </button>
            </div>
          </div>
        </nav>
        <nav></nav>
        <div className="box2">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>
        
      </>
    );
  }
}

export default App;
