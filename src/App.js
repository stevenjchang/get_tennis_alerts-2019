import 'babel-polyfill';
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';

import "./App.css"
import Container from '@material-ui/core/Container';
import MainContainer from './components/theme_V3/MainContainer';

class App extends Component {
  constructor(props) {
    super(props)
    if (process.env.NODE_ENV === 'production') {
      console.log('production')
      ReactGA.initialize('UA-73381859-5');
      ReactGA.pageview(window.location.pathname + window.location.hash);
    }
  }
  render() {
    return (
      <div className="App">
        <Container maxWidth="sm" style={{ padding: '0' }}>
          <Container maxWidth="xs" style={{ padding: '0' }}>
            <MainContainer />
          </Container>
        </Container>
      </div>
    );
  }
}

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={App} exact />
            {/* <Route path="/about" component={About} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
