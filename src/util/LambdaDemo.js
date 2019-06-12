import React, { Component } from "react";
import axios from "axios";


class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  handleClickAxiosPost = e => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post("/.netlify/functions/signup", { test: "123" })
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  handleClickAxiosGet = e => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .get("/.netlify/functions/signup", {
        params: {
          test: "456"
        }
      })
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <p>
        <button onClick={this.handleClick("hello")}>
          {loading ? "Loading..." : "Call Lambda"}
        </button>
        <button onClick={this.handleClick("async-dadjoke")}>
          {loading ? "Loading..." : "Call Async Lambda"}
        </button>
        <button onClick={this.handleClickAxiosGet}>
          {loading ? "Loading..." : "Call Signup GET"}
        </button>
        <button onClick={this.handleClickAxiosPost}>
          {loading ? "Loading..." : "Call Signup POST"}
        </button>
        <br />
        <span>{msg}</span>
      </p>
    );
  }
}

export default LambdaDemo;
