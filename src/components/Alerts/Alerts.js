import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Button from "../../onepirate/modules/components/Button";
import Typography from "../../onepirate/modules/components/Typography";
import TextField from "../../onepirate/modules/components/TextField";
import theme from "../../onepirate/modules/theme";

import EmailSignUp from '../Alerts/EmailSignUp';
import PlayerSearchBar from '../PlayerSearchBar';

const useStyles = makeStyles({
  textField: {
    width: "100%",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4)
  },
  button: {
    width: "100%",
    backgroundColor: "#ff3366"
  },
  noSpamText: {
    marginTop: theme.spacing(1),
    display: "flex",
    justifyContent: "center"
  },
});

const Alerts = () => {
  return (
    <>
      <p>choose players:</p>
      <PlayerSearchBar />
      <EmailSignUp />
    </>
  );
}

export default Alerts;
