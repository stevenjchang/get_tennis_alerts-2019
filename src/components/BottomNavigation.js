import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import NotificationImportant from '@material-ui/icons/NotificationImportant';
import WatchLater from '@material-ui/icons/WatchLater';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    color: 'purple',
    backgroundColor: '#d64541',
  },
  label: {
    fontSize: '0.9rem',
    color: 'white',
  },
  actionItem: {
    // These styles are applied to the root element when
    // when selected. This changes the color of both the
    // icon and label text.
    "&$selected": {
      color: "red"
    }
  },
  // NOTE: You need to include a `.selected` class in your
  // styles rules for the "&$selected" selector to work.
  selected: {
    "&$selected": {
      color: "blue",
      fontSize: '1.05rem',
    }
  },
  wrapper: {
    fontSize: '0.2rem',
  }
});


export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label='Get Match Alerts'
        classes={{
          root: classes.actionItem,
          selected: classes.selected,
          // wrapper: classes.wrapper,
          label: classes.label,
        }}
      />
      <BottomNavigationAction
        label='Get Match Alerts'
        classes={{
          root: classes.actionItem,
          selected: classes.selected,
          // wrapper: classes.wrapper,
          label: classes.label,
        }}
      /><BottomNavigationAction
        label='Get Match Alerts'
        classes={{
          root: classes.actionItem,
          selected: classes.selected,
          // wrapper: classes.wrapper,
          label: classes.label,
        }}
      />

      {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} /> */}
      {/* <BottomNavigationAction
        label="Quickview"
        // icon={<WatchLater/>}
        className={classes.action}
        /> */}
      {/* <BottomNavigationAction label="Get Match Alerts" icon={<NotificationImportant />} /> */}
    </BottomNavigation>
  );
};
