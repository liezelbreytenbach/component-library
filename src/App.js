import { Redirect, Route, Switch } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import Layout from './components/Layout';
import MyTable from './pages/MyTable';
import { theme } from './utils/theme';
import './App.css';

function App() {

  return (
    <div className="App">
        <StyledThemeProvider theme={theme}>
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
        </StyledThemeProvider>
      </div>
  );
}

export default App;
