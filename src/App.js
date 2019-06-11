import React, { Component } from "react"
import ReactGA from 'react-ga';
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
        <button onClick={this.handleClick("signup")}>
          {loading ? "Loading..." : "Call Signup"}
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
