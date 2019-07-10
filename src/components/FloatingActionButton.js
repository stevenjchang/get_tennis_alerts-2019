import React from "react";
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
    backgroundColor: "#C6FF00" //NOTE: A400
  },
}));


export default function FloatingActionButton() {
  const classes = useStyles();

  return (
    <>
      <Fab variant="extended" size="medium" aria-label="Delete" className={classes.fab}>
        <AddIcon />
        Get Alerts
      </Fab>
    </>
  );
}
