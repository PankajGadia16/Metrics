import React, { Component } from 'react'
import Header from './Header'
import SignInWith from './SignInWith'
import MetricListCounter from './MetricListCounter'
import NewMetricCreator from './NewMetricCreator'

class Home extends Component {
    render() { 
        return (
            <div>
                <Header />
                <SignInWith />
                <MetricListCounter />
                <NewMetricCreator/>
            </div>
        )
    }
}
export default Home