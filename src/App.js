import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Home from './components/Home/Home';

class App extends Component {
  history = createBrowserHistory();

  render() {
    return (
          <Router history={this.history}>
            <Home/>
          </Router>
    );
  }
}

export default App;
