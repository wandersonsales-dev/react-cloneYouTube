import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  appBar: {
    boxShadow: 'none'
  },
  icons: {
    padding: theme.spacing(5)
  },
  logo: {
    height: '25px',
  },
  menuIcon: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(6)
  },
  grow: {
    flexGrow: 1
  }
}))

function Home() {
  const classes = useStyles()
  return <div className={classes.root}>
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.menuIcon} color="inherit" area-label="Menu" edge="start" >
          <MenuIcon />
        </IconButton>
        <img src='/images/preto.png' alt="logo" className={classes.logo} />
        <div className={classes.grow} />
        <IconButton className={classes.icons} color="inherit" >
          <VideoCall />
        </IconButton>
        <IconButton className={classes.icons} color="inherit" >
          <MoreVert />
        </IconButton>
        <IconButton className={classes.icons} color="inherit" >
          <Apps />
        </IconButton>
        <Button variant="outlined" color="secondary" startIcon={<AccountCircleIcon />}>Fazer login</Button>
      </Toolbar>
    </AppBar>
  </div>
}

export default Home;