import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  ListSubheader
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import VideoCall from '@material-ui/icons/VideoCall';

import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import { AddCircle } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: 'none'
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
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
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  listItemText: {
    fontSize: 14,
  },
  subheader: {
    textTransform: 'uppercase',
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
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<HomeIcon />}</ListItemIcon>
            <ListItemText primary={"Início"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<Whatshot />}</ListItemIcon>
            <ListItemText primary={"Em alta"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<Subscriptions />}</ListItemIcon>
            <ListItemText primary={"Inscrições"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
            <ListItemText primary={"Biblioteca"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<History />}</ListItemIcon>
            <ListItemText primary={"Histórico"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
        </List>
        <Divider />
        <Box p={7}>
          <Typography variant="body2">
            Faça login para curtir vídeos, comentar e se inscrever.
          </Typography>
          <Box mt={2}>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<AccountCircleIcon />}>
              Fazer login
            </Button>
          </Box>
        </Box>
        <Divider />
          
        
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              className={classes.subheader}>
                O melhor do youtube
              </ListSubheader>
          }>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<AddCircle />}</ListItemIcon>
            <ListItemText primary={"Música"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<AddCircle />}</ListItemIcon>
            <ListItemText primary={"Esportes"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<AddCircle />}</ListItemIcon>
            <ListItemText primary={"Jogos"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<AddCircle />}</ListItemIcon>
            <ListItemText primary={"Filmes"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<AddCircle />}</ListItemIcon>
            <ListItemText primary={"Notícias"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<AddCircle />}</ListItemIcon>
            <ListItemText primary={"Ao vivo"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<AddCircle />}</ListItemIcon>
            <ListItemText primary={"Destaque"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<AddCircle />}</ListItemIcon>
            <ListItemText primary={"Vídeo em 360°"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
        </List>
        <Divider />

        <List>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
            <ListItemText primary={"Procurar mais"} classes={{
              primary: classes.listItemText
            }} />
          </ListItem>
        </List>

        <Divider />
      </div>
    </Drawer>
  </div>
}

export default Home;