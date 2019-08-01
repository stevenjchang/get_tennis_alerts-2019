import React from 'react';
import connectTennis from "../../../../containers/connectTennis";
import Container from "@material-ui/core/Container";
import Modal from "@material-ui/core/Modal";
import PlayerSearchBar from '../../../PlayerSearchBar';
import EmailSignUp from '../../../Alerts/EmailSignUp';

const SignUpModal = ({ showSignUpForm, toggleShowSignUpForm }) => {
  return (
    <>
      <Modal
        style={{ textAlign: "center" }}
        open={showSignUpForm}
        // onClick={toggleShowSignUpForm}
      >
        <Container maxWidth="xs" style={{ backgroundColor: "#c8e6c9" }}>
          <button onClick={toggleShowSignUpForm} style={{ float: "right" }}>
            X
          </button>
          <h4>select players</h4>
          <PlayerSearchBar />
          <EmailSignUp />
        </Container>
      </Modal>
    </>
  );
};

export default connectTennis(SignUpModal);
