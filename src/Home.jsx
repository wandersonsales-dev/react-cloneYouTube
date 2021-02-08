import React from 'react';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  }
}))

function Home() {
  const classes = useStyles()
  return <div className={classes.root}></div>
}

export default Home;