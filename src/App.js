import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Detail from './components/Detail'
import requireAuthentication from './utils/requireAuth'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/metric" component={requireAuthentication(Detail)} />
          <Route path="**" component={Home} />
        </Switch>
      </div>
    )
  }
}

export default App