import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "../../onepirate/modules/components/Button";
import Typography from "../../onepirate/modules/components/Typography";
import TextField from "../../onepirate/modules/components/TextField";
import theme from "../../onepirate/modules/theme";

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
  }
});

const EmailSignUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  return (
    <div style={{
      maxWidth: '75%',
      margin: '60px auto',

    }}>
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
      >
        {/* Keep me updated */}
        Get Email Alerts!
      </Button>
      <Typography variant="h8" className={classes.noSpamText}>
        No Spam. This is a hobby project.
      </Typography>
    </div>
  );
};

export default EmailSignUp;
