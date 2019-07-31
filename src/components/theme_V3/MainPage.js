import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  heading: {
    color: "white",
    fontSize: "34px",
    fontWeight: "700",
    margin: "40px 40px 0 40px",
    borderColor: 'white',
    fontFamily: "Open Sans"
  },
  subtitle2: {
    color: "white",
    fontSize: "13px",
    fontWeight: "400",
    opacity: '0.9',
    marginTop: "5px",
    fontFamily: "Open Sans",
    // marginLeft: '110px',
    // textAlign: 'left',
  }
});

function MainPage(props) {
  const { classes } = props;

  return (
    <>
      <Typography variant="h1" className={classes.heading}>
        GET CUSTOM MATCH REMINDERS
      </Typography>
      <Typography variant="subtitle2" className={classes.subtitle2}>
        • follow your favorite players
      </Typography>
      <Typography variant="subtitle2" className={classes.subtitle2}>
        • sent straight to your inbox
      </Typography>
    </>
  );
}

export default withStyles(styles)(MainPage);
