import React, { useState } from "react";
import connectTennis from "../../containers/connectTennis";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../onepirate/modules/components/Button";
import Snackbar from "../../onepirate/modules/components/Snackbar";
import Typography from "../../onepirate/modules/components/Typography";
import TextField from "../../onepirate/modules/components/TextField";
import theme from "../../onepirate/modules/theme";

import { _sendEmailSignUp } from './utils/_sendEmailSignUp';

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
    justifyContent: "center",
    fontSize: '12px',
  }
});

const EmailSignUp = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [showSuccessMessage, toggleSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    _sendEmailSignUp(email, props)
      .then((res) => {
        console.log('Sign Up complete ==>', res);
        toggleSuccessMessage(true);
        setEmail('')
      })
      .catch((err) => { console.log('Error in EmailSignUp ==>', err) })
  }

  return (
    <div
      style={{
        maxWidth: "75%",
        margin: "60px auto"
      }}
    >
      <TextField
        id="filled-email-input"
        label="Email"
        className={classes.textField}
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="filled"
        onChange={e => setEmail(e.target.value)}
        value={email}
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        className={classes.button}
        onClick={handleSubmit}
      >
        Get Email Alerts!
      </Button>
      <Typography variant="h8" className={classes.noSpamText}>
        No Spam. This is a hobby project.
      </Typography>
      <Snackbar
        open={showSuccessMessage}
        onClose={() => toggleSuccessMessage(false)}
        message="Thank you. You are now subscribed."
      />
    </div>
  );
};

export default connectTennis(EmailSignUp);
