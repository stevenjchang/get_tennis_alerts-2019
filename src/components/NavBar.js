import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#00c853",
    boxShadow: 'none',
  },
  container: {
    padding: '0 0',
  },
  menuButton: {
    // marginRight: theme.spacing(2),
    color: "white",
  },
  title: {
    flexGrow: 1,
    color: "white",
    fontFamily: "Open Sans",
    fontSize: '29px',
    fontWeight: '600',
  }
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Container maxWidth="lg" className={classes.container}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              tennis alerts
            </Typography>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
