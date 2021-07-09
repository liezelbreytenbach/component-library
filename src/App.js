import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import Layout from './components/Layout';
import MyTable from './pages/MyTable';
import { theme } from './utils/theme';
import './App.css';

function App() {

  return (
    <div className="App">
        <ThemeProvider theme={theme}>
          <Layout>
            <Switch>
              <Route path="/" exact>
                <Redirect to="/table" />
              </Route>
              <Route path="/table">
                <MyTable />
              </Route>
            </Switch>
          </Layout>
        </ThemeProvider>
      </div>
  );
}

export default App;
