import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import theme from "../onepirate/modules/theme";
import Scores from './Scores';

// import Home from '../onepirate/Home';
import ProductHero from '../onepirate/modules/views/ProductHero'

const useStyles = makeStyles({
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    color: "white",
    backgroundColor: "#00796B"
  }
});


const MainContainer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="standard"
          // indicatorColor="primary"
          // textColor="primary"
          // variant="fullWidth"
          scrollButtons="on"
        >
          <Tab label="HOME" style={{ minWidth: "33%" }} />
          <Tab label="SCORES" style={{ minWidth: "33%" }} />
          <Tab label="ALERTS" style={{ minWidth: "33%" }} />
        </Tabs>
      </Paper>
      {value === 0 && <ProductHero />} 
      {value === 1 && <Scores />}
      {value === 2 && <h1>Alerts</h1>}
    </>
  );
}

export default MainContainer;
