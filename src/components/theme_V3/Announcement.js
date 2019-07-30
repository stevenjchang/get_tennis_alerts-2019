import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    backgroundColor: '#76ff03',
    opacity: '0.95',
    borderRadius: '10px',
    margin: '10% 15% 15% 15%',
    padding: '3px',
  },
  p: {
    color: "black",
    fontSize: "12px",
  }
})

function Announcement(props) {
  const { classes } = props;

  return (
    <div className ={classes.root}>
      <p className={classes.p}>US Open begins: August 26th</p>
      <p className={classes.p}>Schedule announced: August 24th</p>
    </div>
  );
}

export default withStyles(styles)(Announcement);
