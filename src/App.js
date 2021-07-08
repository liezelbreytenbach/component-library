import { Redirect, Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

import MyTable from './pages/MyTable';
import { themeWT } from './style/theme';
import './App.css';

const theme = createTheme(themeWT);

function App() {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/table" />
            </Route>
            <Route path="/table">
              <MyTable />
            </Route>
          </Switch>
        </ThemeProvider>
      </div>
  );
}

export default App;
