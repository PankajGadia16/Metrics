import React, { Component } from 'react'
import Header from './Header'
import SignInWith from './SignInWith'
import RecentListCounter from './RecentListCounter'
import ViewGraph from './ViewGraph'
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <SignInWith />
                <RecentListCounter />
                <ViewGraph />
            </div>
        )
    }
}
export default Home