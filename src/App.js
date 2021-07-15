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
              <Route path="/table" component={MyTable} />
              <Redirect to="/table" />
            </Switch>
          </Layout>
        </StyledThemeProvider>
      </div>
  );
}

export default App;
