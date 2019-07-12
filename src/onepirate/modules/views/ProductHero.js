import React from 'react';
import connectTennis from '../../../containers/connectTennis';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Paper from '@material-ui/core/Paper';

import ga from '../../../util/ReactGA';

const backgroundImage =
  // 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';
  '/static/themes/onepirate/tennis-575578-unsplash.jpg';

function pxToRem(value) {
  return `${value / 16}rem`;
}

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200,
    borderRadius: '10px',
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  },
  title1: {
    maxWidth: "625px",
    fontSize: pxToRem(40),
    fontFamily: "Roboto",
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      fontSize: pxToRem(39)
    }
  },
});

function ProductHero(props) {
  const { classes } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setActiveTab(2);
    ga.trackSignUpClick(2);
  }

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img style={{ display: "none" }} src={backgroundImage} alt="" />
      <Typography
        color="inherit"
        align="center"
        variant="h1"
        marked="center"
        className={classes.title1}
      >
        {/* Upgrade your Sundays */}
        Get FREE email alerts when the next match happens.
        <br />
        <br />
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          marked="center"
        >
          Follow your favorite players.
          <br />
          <br />
        </Typography>
      </Typography>

      <Typography
        color="inherit"
        align="center"
        variant="h7"
        className={classes.h5}
      >
        {/* Enjoy secret offers up to -70% off the best luxury hotels every Sunday. */}
        Simple and easy. Never miss another match!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        onClick={handleSubmit}
      >
        Choose Players
      </Button>
      <Typography variant="h8" color="inherit" className={classes.more}>
        {/* Discover the experience */}
        {/* No Spam! This a hobby project, made for tennis fans. */}
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connectTennis(withStyles(styles)(ProductHero));
