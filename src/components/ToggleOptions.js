import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Typography from "@material-ui/core/Typography";
import connectTennis from "../containers/connectTennis";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: "flex-end",
    marginRight: '-0.7rem',
  }
}));


const ToggleOptions = ({ showHistory, toggleShowHistory }) => {
  const classes = useStyles();

  return (
    <>
      <FormGroup row className={classes.root}>
        <FormControlLabel
          control={
            <Switch
              checked={showHistory}
              onChange={toggleShowHistory}
              value="checkedA"
            />
          }
          label={
            <Typography variant="headline" component="p">
              show history
            </Typography>
          }
          labelPlacement="end"
        />
      </FormGroup>
    </>
  );
}

const ConnectTennisToggleOptions = connectTennis(ToggleOptions);

export default ConnectTennisToggleOptions;
