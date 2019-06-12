import React, { Component } from "react"
import ReactGA from 'react-ga';
import axios from 'axios';
import logo from "./logo.svg"
import "./App.css"
import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar';
import Tennis from './components/Tennis';

import BottomNavigation from './components/BottomNavigation';


class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }))
  }

  handleClickAxiosPost = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .post("/.netlify/functions/signup", { test: "123" })
      .then(json => this.setState({ loading: false, msg: json.msg }));
  }

  handleClickAxiosGet = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .get("/.netlify/functions/signup", {
        params: {
          test: "456"
        }
      })
      .then(json => this.setState({ loading: false, msg: json.msg }));
  }

  render() {
    const { loading, msg } = this.state

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

class App extends Component {
  constructor(props) {
    super(props)
    if (process.env.NODE_ENV === 'production') {
      console.log('production')
      ReactGA.initialize('UA-73381859-5');
      ReactGA.pageview(window.location.pathname);
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <LambdaDemo />
        <Container
          maxWidth='xs'
        >
          <Tennis />
        </Container>
        <BottomNavigation />
      </div>
    )
  }
}

export default App
