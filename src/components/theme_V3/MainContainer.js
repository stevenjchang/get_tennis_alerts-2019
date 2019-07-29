import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import MainPage from './MainPage';
import NavBar from '../NavBar'

class MainContainer extends Component {
  render() {
    return (
      <Container maxWidth="xs">
        <NavBar />
        <MainPage />
      </Container>
    );
  }
}

export default MainContainer;
