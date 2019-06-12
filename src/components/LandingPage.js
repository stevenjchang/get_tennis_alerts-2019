import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import connectTennis from "../containers/connectTennis";

const useStyles = makeStyles({
  card: {
    marginTop: '25px',
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const LandingPage = (props) => {
  const classes = useStyles();
  const bullet = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="body2">
          {bullet} TennisAlerts will email you a notification before a tennis
          match.
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {bullet} Fully customizable, choose which players you want to
          follow. No need to keep an app on your phone!
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {bullet} No need to keep an app on your phone!
        </Typography>

        <div style={{ marginLeft: "25%" }}>
          <Typography
            variant="h8"
            component="p"
            align="left"
            gutterBottom
            style={{ marginTop: "30px" }}
          >
            Get email alerts, FREE!
          </Typography>

          <Typography
            className={classes.title}
            color="textSecondary"
            align="left"
          >
            {bullet} customized alerts,
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            align="left"
          >
            {bullet} choose only your favorite players
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            align="left"
          >
            {bullet} choose when you are alerted
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            align="left"
          >
            {bullet} No spam
          </Typography>
        </div>

        <Button
          size="small"
          style={{
            backgroundColor: "#007bff",
            marginBottom: "5px",
            marginTop: "40px"
          }}
          variant="outlined"
          onClick={props.toggleShowSignUpForm}
        >
          Sign Up For Alerts
        </Button>

        <Button
          size="small"
          style={{ backgroundColor: "red", marginBottom: "25px" }}
          variant="outlined"
          // onClick={handleOpen}
        >
          Quick View Next Matches
        </Button>

        <Typography variant="body2" component="p" gutterBottom style={{fontSize: '9px'}}>
          No Spam. This is a hobby project for tennis fans around the
          world. Your email will not be used for anything else.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sign Up</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

const ConnectTennisLandingPage = connectTennis(LandingPage)

export default ConnectTennisLandingPage;

/*
VERSION 1:
Want to be reminded
when the next tennis match is?

No need to keep an app on your phone!

VERSION 2:
TennisAlerts will email you a notification before a tennis match. Fully customizable, choose which players you want to follow. 

No need to keep an app on your phone!
*/