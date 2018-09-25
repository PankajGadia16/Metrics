import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGraphData } from '../redux/actions/actions'

class MetricListItem extends Component {

    render() {
        return (
            <div>
                <tr>
                    <td style={{ padding: "10px" }}>{this.props.item.counter}</td>
                    <td style={{ padding: "10px" }}>{this.props.item.counterDescription}</td>
                    <td style={{ padding: "10px" }}>{this.props.item.countValue}</td>
                    <td style={{ padding: "10px" }}><button onClick={this.props.getGraphData.bind(this.props.item.counter)}>Graph View</button></td>
                </tr>
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
    getGraphData
}
export default connect(mapStateToProps, mapDispatchToProps)(MetricListItem)