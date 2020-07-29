import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppShellStyle } from './../../theme/appShellStyle';


export default function TopAppBar() {
  const classes = useAppShellStyle();

  return (
  
      <AppBar position="static" className={classes.appBarRoot}>
        <Toolbar>
          <Typography variant="h5" className={classes.appBarTitle}>
            Mehmoonchi
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon className={classes.menuButton} />
          </IconButton>
        </Toolbar>
      </AppBar>
   );
}
