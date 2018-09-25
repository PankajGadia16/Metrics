import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Router } from 'react-router'
import App from './App.js'
import registerServiceWorker from './registerServiceWorker'
import { store, history } from './redux/store'
import './assets/medium.css'
import { getUser } from './redux/actions/actions'

if (localStorage.Auth) {
    store.dispatch({ type: 'SET_USER', user: JSON.parse(localStorage.Auth) })
    var _id = JSON.parse(localStorage.Auth)._id
    getUser(_id).then((res) => {
        store.dispatch({ type: 'SET_USER', user: res })
    })
}

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </Provider>
), document.getElementById('root'))

registerServiceWorker()