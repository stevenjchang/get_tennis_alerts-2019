import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const GOOGLE_FORMS_SURVEY_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdOAh7UE6efE7fSJOzPOFbw7utJrx5ypsYFeOgjjy-W82Cziw/viewform?usp=sf_link';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;
  console.log('GOOGLE_FORMS_SURVEY_URL ==>', GOOGLE_FORMS_SURVEY_URL);

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button}>
        <a
          href={GOOGLE_FORMS_SURVEY_URL}
          style={{textDecoration: 'none'}}
          target="_blank"
        >
          <Typography variant="h4" component="span">
            {/* Got any questions? Need help? */}
            Got Feedback? Take our survey!
          </Typography>
        </a>
      </Button>
      <Typography variant="subtitle1" className={classes.link}>
        {/* We are here to help. Get in touch! */}
        We are rapidly building out more features. We would love to hear from
        you!
      </Typography>
      <img
        src="/static/themes/onepirate/producBuoy.svg"
        className={classes.buoy}
        alt="buoy"
      />
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
