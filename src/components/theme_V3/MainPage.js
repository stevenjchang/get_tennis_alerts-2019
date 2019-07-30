import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  heading: {
    color: "white",
    fontSize: "36px",
    fontWeight: "700",
    marginTop: "45px",
    fontFamily: "Open Sans"
  },
  subtitle2: {
    color: "white",
    fontSize: "16px",
    fontWeight: "400",
    marginTop: "5px",
    fontFamily: "Open Sans"
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
        - straight to your inbox
      </Typography>
      <Typography variant="subtitle2" className={classes.subtitle2}>
        - follow your favorite players
      </Typography>
    </>
  );
}

export default withStyles(styles)(MainPage);
