import React, { Component } from "react"
import ReactGA from 'react-ga';
import logo from "./logo.svg"
import "./App.css"

import TennisContainer from './containers/TennisContainer';

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
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <span>{msg}</span>
      </p>
    )
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
        <TennisContainer />
      </div>
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
