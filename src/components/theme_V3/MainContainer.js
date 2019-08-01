import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Announcement from "./Announcement";
import BottomNavigation from './BottomNavigation';
import MainPage from './MainPage';
import NavBar from '../NavBar';
import Scores from '../Scores';

import EmailSignUp from '../Alerts/EmailSignUp'
import SignUpModal from './views/SignUpModal/SignUpModal'


class MainContainer extends Component {
  render() {
    return (
      <Container maxWidth="xs">
        <NavBar />
        <MainPage />
        <Announcement />
        <Scores />
        <EmailSignUp />
        <SignUpModal />
        <BottomNavigation />
      </Container>
    );
  }
}

export default MainContainer;
