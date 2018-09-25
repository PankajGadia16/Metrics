import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewMetric } from '../redux/actions/actions'

class NewMetricCreator extends Component {

    render() {
        return (
            <div>
                <h4>Create New Metric</h4>
                <form>
                    <input id="counterName" placeholder="Counter Name" required />
                    <input id="counterDescription" placeholder="Counter Description" required />
                    <input id="counterValue" placeholder="count" required />
                    <button onClick={this.props.addNewMetric}>Add</button>
                </form>
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
    addNewMetric
}
export default connect(mapStateToProps, mapDispatchToProps)(NewMetricCreator)