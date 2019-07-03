import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import connectTennis from '../containers/connectTennis';
import { connect } from "net";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 520
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function TimeZoneSelect({ setTimeZone, timeZone }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    let timeZoneLocationString = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let timeZoneOffset = new Date().toString().match(/([-\+][0-9]+)\s/)[1];
    setTimeZone({ timeZoneLocationString, timeZoneOffset })
  }, []);

  function handleChange(event) {
    // setValues(oldValues => ({
    //   ...oldValues,
    //   [event.target.name]: event.target.value
    // }));
  }

  return (
    <form className={classes.root} autoComplete="off">
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="filled-age-simple">
          Time Zone
        </InputLabel>
        <Select
          value={timeZone}
          onChange={handleChange}
          input={<FilledInput name="age" id="filled-age-simple" />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={4}>seven</MenuItem>
          <MenuItem value={-7}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <button onClick={() => console.log("values ==>", values)}>
          values
        </button>
      </FormControl>
    </form>
  );
}

const TimeZoneSelect222 = ({ setTimeZone, timeZone }) => {
  React.useEffect(() => {
    let timeZoneLocationString = Intl.DateTimeFormat().resolvedOptions()
      .timeZone;
    let timeZoneOffset = new Date()
      .toString()
      .match(/([-\+][0-9]+)\s/)[1];
    setTimeZone({ timeZoneLocationString, timeZoneOffset });
  }, []);

  return (
    <div>
      <h6>
        {timeZone.timeZoneLocationString} | {timeZone.timeZoneOffset}
      </h6>
    </div>
  );
}

const ConnectTennisTimeZoneSelect = connectTennis(TimeZoneSelect222);

export default ConnectTennisTimeZoneSelect;