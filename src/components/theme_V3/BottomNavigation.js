import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
// import MuiBottomNavigation from "@material-ui/core/BottomNavigation";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    bottom: "0px",
    paddingTop: "15px",
    paddingBottom: "15px",
    marginLeft: "-3px",
    marginRight: "-30px",
    width: "102%",
    backgroundColor: "#00c853",
    position: "sticky"
  },
  button1: {
    backgroundColor: "yellow",
    width: "60%",
  },
  button2: {
    width: "60%"
  }
});

const BottomNavigation = (props) => {
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Button className={classes.button1}>Sign Up</Button>
      <br />
      <Button className={classes.button2}>Customize Players</Button>
    </Container>
  );
}

export default BottomNavigation;
