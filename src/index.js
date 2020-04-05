import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MotionGame from './MotionGame';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      {/* <Route path="/" exact component={App} /> */}
      <Route path="/" exact component={MotionGame} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
