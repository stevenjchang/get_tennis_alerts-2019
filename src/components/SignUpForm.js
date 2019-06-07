import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const msgStyles = {
  maxWidth: '35%',
  marginTop: '100px',
  marginBottom: '35px',
}


const SignUpForm = ({ playerList }) => {
  const [open, setOpen] = React.useState(false);
  const [checkboxA, setCheckboxA] = React.useState(true);
  const [checkboxB, setCheckboxB] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    let payload = {
      email,
      checkboxA,
      checkboxB,
      playerList,
    }
    console.log('payload ==>', payload);
  }

  return (
    <>
      <Typography variant="h8" id="modal-title" style={msgStyles}>
        Never miss another match because you forgot,
        sign up for email alerts. Choose the players you want to follow, and get notifications 1 day or 1 hour before match!
      </Typography>
      <Button onClick={handleOpen}>Get Alerts</Button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Set alerts for these players:
            {
              playerList
              && playerList.map((player) => (
                <p>{player}</p>
              ))
            }
          </Typography>
          <Typography variant="subtitle1" id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

          <div>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>

          <div>
          <Checkbox
            checked={checkboxA}
            onChange={() => {setCheckboxA(!checkboxA)}}
            value={checkboxA}
            color="primary"
            inputProps={{
              'aria-label': 'primary checkbox',
            }}
          />
            <span>1 day before match</span>
          </div>
          <div>
          <Checkbox
            checked={checkboxB}
            onChange={() => {setCheckboxB(!checkboxB)}}
            value={checkboxA}
            color="primary"
            inputProps={{
              'aria-label': 'secondary checkbox',
            }}
          />
            <span>1 hour before match</span>
          </div>
          <div>
          <Button
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          </div>

        </div>
      </Modal>
    </>
  );
}

export default SignUpForm;

/*
  What does this component look like?

  There a button:
   "Get Email Alerts"

  "Send me alerts for these players",

  "My email address is"

  "Send me alerts"
    "24 hours before match"
    "1 hour before match"
    "on Sunday before the match"
  
  "Sign up for alerts"
*/