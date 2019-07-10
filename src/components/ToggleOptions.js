import React from 'react';
import connectTennis from "../containers/connectTennis";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const ToggleOptions = ({ showHistory, toggleShowHistory }) => {
  return (
    <>
      <FormGroup row style={{ justifyContent: 'center' }}>
        <FormControlLabel
          control={
            <Switch
              checked={showHistory}
              onChange={toggleShowHistory}
              value="checkedA"
            />
          }
          label="Show Past Matches"
          labelPlacement="end"
          labelStyle={{ fontSize: "0.75rem" }}
        />
      </FormGroup>
    </>
  );
}

const ConnectTennisToggleOptions = connectTennis(ToggleOptions);

export default ConnectTennisToggleOptions;
