import React from "react";
import connectTennis from '../containers/connectTennis';
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: 0,
    top: "auto",
    right: "37%",
    bottom: "20px",
    left: "auto",
    position: "fixed",
    color: "black",
    backgroundColor: "#C6FF00" //color: A400
  }
}));

function FloatingActionButton({ setActiveTab }) {
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveTab(2);
  }

  return (
    <>
      <Fab
        variant="extended"
        size="medium"
        aria-label="Delete"
        className={classes.fab}
        onClick={handleSubmit}
      >
        <AddIcon />
        Get Alerts
      </Fab>
    </>
  );
}

export default connectTennis(FloatingActionButton);
