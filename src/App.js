import React, {Component} from 'react';
import {Router} from 'react-router-dom';
import {Provider} from "react-redux";
import {createBrowserHistory} from 'history';
import store from "./redux/store";
import Home from './components/Home/Home';

class App extends Component {
  history = createBrowserHistory();

  render() {
    return (
        <Provider store={store}>
          <Router history={this.history}>
            <Home/>
          </Router>
        </Provider>
    );
  }
}

export default App;
