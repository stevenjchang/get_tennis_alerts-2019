import React from 'react';
import connectTennis from "../containers/connectTennis";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Typography from "@material-ui/core/Typography";


const ToggleOptions = ({ showHistory, toggleShowHistory }) => {
  return (
    <>
      <FormGroup row style={{ justifyContent: "flex-end" }}>
        <FormControlLabel
          control={
            <Switch
              checked={showHistory}
              onChange={toggleShowHistory}
              value="checkedA"
            />
          }
          // label="Show Past Matches"
          label={
            <Typography variant="headline" component="p">
              show history
            </Typography>
          }
          labelPlacement="end"
          labelStyle={{ fontSize: "0.75rem" }}
        />
      </FormGroup>
    </>
  );
}

const ConnectTennisToggleOptions = connectTennis(ToggleOptions);

export default ConnectTennisToggleOptions;
