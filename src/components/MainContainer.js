import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import theme from "../onepirate/modules/theme";
import Scores from './Scores';


const useStyles = makeStyles({
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    // color: 'white',
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
          // indicatorColor="primary"
          // textColor="primary"
          variant="fullWidth"
        >
          <Tab label="SEE SCORES" />
          <Tab label="GET ALERTS" />
        </Tabs>
      </Paper>
      { 
        value === 0
        && <Scores />
      }
      {
        value === 1
        // && <Alerts />
        && <h1>Alerts</h1>
      }
    </>
  );
}

export default MainContainer;
