import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Snackbar from '../components/Snackbar';
import Button from '../components/Button';

import Checkbox from '@material-ui/core/Checkbox';
import PlayerSearchBar from '../../../components/PlayerSearchBar';
import axios from 'axios';
import { LAMBDA_URI } from "../../../constants";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: 0,
    display: 'flex',
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#e4e9ed',
    padding: theme.spacing(8, 3),
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  button: {
    width: '100%',
    backgroundColor: '#d64541',
  },
  imagesWrapper: {
    position: 'relative',
  },
  imageDots: {
    position: 'absolute',
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: '100%',
    background: 'url(/static/onepirate/productCTAImageDots.png)',
  },
  image: {
    position: 'absolute',
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: '100%',
    maxWidth: 600,
  },
});

class ProductCTA extends React.Component {
  state = {
    open: false,
  };

  handleSubmit = event => {
    event.preventDefault();

    let body = {
      // selectedPlayers: this.props.selectedPlayers.sort(),
      email: this.state.email,
      checkboxA: this.state.checkboxA,
      checkboxB: this.state.checkboxB,
    }
    
    axios.post(`${LAMBDA_URI}/signup`, body)
      .then((res) => {
        this.setState({ open: true });
      })
      .catch((err) => console.log('err in axios.post in ProductCTA ==>', err))
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheckbox = (e) => {
    const name = e.target.name;
    this.setState({ [name]: !(this.state[name]) })
  }

  render() {
    const { classes } = this.props;

    return (
      <Container className={classes.root} component="section">
        <Grid justify="center" container>
          <Grid item xs={12} md={10} className={classes.cardWrapper}>
            <div className={classes.card}>
              <form onSubmit={this.handleSubmit} className={classes.cardContent}>
                <PlayerSearchBar />
                <Typography variant="h2" component="h2" gutterBottom>
                  {/* Receive offers */}
                </Typography>
                <Typography variant="h5">
                  {/* Taste the holidays of the everyday close to home. */}
                </Typography>
                <div style={{marginTop: '70px'}}>
                  <Checkbox 
                    name="checkboxA"
                    onChange={this.handleCheckbox}
                  />
                  <span>1 day before match</span>
                  <Checkbox
                    name="checkboxB"
                    onChange={this.handleCheckbox}
                  />
                  <span>1 hour before match</span>
                </div>
                <TextField
                  noBorder
                  className={classes.textField}
                  placeholder="Your email"
                  name="email"
                  onChange={this.handleOnChange}
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
              </form>
            </div>
          </Grid>
          {/* <Grid item xs={12} md={6} className={classes.imagesWrapper}>
            <Hidden smDown>
              <div className={classes.imageDots} />
              <img
                src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
                alt="call to action"
                className={classes.image}
              />
            </Hidden>
          </Grid> */}
        </Grid>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          message="We will send you our best offers, once a week."
        />
      </Container>
    );
  }
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCTA);
