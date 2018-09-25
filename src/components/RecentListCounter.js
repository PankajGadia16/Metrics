import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadMetrics } from '../redux/actions/actions'
import MetricListItem from './RecentListItem'


class RecentListCounter extends Component {

    componentDidMount() {
        this.props.loadMetrics()
    }

    render() {
        return (
            <div style={{"margin-top": '70px'}}>
                <h3>Showing recent 10 updates to the metrics...!</h3>
                <table>
                    {this.props.metrics.metrics.map(metric => <MetricListItem item={metric} key={metric.id} />)}
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        metrics: state.metrics,
    }
}
const mapDispatchToProps = {
    loadMetrics
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentListCounter)