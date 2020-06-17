import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './utils/history';
import Home from './views/Home';
import './scss/App.scss';

function App() {
  return (
    <div className='App'>
      <div className='page-container'>
        <div className='content-wrap'>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
