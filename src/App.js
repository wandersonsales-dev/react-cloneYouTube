import { Button, ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core'
import Home from './Home'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    backgroundColor: 'red'
  }
})

function App() {

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#1769aa',
      }
    },
  });

  const classes = useStyles()

  return (
    < ThemeProvider theme={theme} >
      <Home />
    </ThemeProvider>
  )
}

export default App;
