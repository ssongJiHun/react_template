import { BrowserRouter as Router } from 'react-router-dom';
import { routes, renderRoutes } from 'src/routes';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        {renderRoutes(routes)}
      </Router>
    </ThemeProvider>
  );
}

export default App;
