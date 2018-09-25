import React, { Component } from 'react'
import { connect } from 'react-redux'
import { aggregateMetric } from '../redux/actions/actions'
import MetricListItem from './MetricListItem'

class RecentListCounter extends Component {

    componentDidMount() {
        this.props.aggregateMetric()
    }

    render() {
        return (
            <div style={{ "margin-top": '70px' }}>
            <h3>Showing all Counters with cumulated value!</h3>
                <table >
                    {this.props.metrics.metrics.map(metric => <MetricListItem item={metric} key={metric._id.counter} />)}
                </table>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        metrics: state.metrics,
    }
}
const mapDispatchToProps = {
    aggregateMetric
}
export default connect(mapStateToProps, mapDispatchToProps)(RecentListCounter)