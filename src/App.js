import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Browse from './components/Browse'
import Menu from './components/Menu'
import Random from './components/Random'
import Search from './components/Search'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Menu/>
          </div>
          <Route exact path="/" component={Browse} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/random" component={Random} />
        </div>
      </Router>
    );
  }
}

export default App;
