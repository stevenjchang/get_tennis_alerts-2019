import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Announcement from "./Announcement";
import MainPage from './MainPage';
import NavBar from '../NavBar';
import Scores from '../Scores';

class MainContainer extends Component {
  render() {
    return (
      <Container>
        <NavBar />
        <MainPage />
        <Announcement />
        <Scores />
      </Container>
    );
  }
}

export default MainContainer;
