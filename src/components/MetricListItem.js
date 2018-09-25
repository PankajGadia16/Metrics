import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMetric } from '../redux/actions/actions'

class MetricListItem extends Component {

    render() {
        return (
            <tr>
                <td style={{ padding: "10px" }}>{this.props.item._id.counter}</td>
                <td style={{ padding: "10px" }}>{this.props.item._id.counterDescription}</td>
                <td style={{ padding: "10px" }} id={this.props.item._id.counterDescription} >{this.props.item.totalCount}</td>
                <td style={{ padding: "10px" }}><input placeholder="Add your value" id={this.props.item._id.counter} /> </td>
                <td style={{ padding: "10px" }}><button onClick={this.props.addMetric.bind(this.props.item)}>+</button></td>
            </tr>
        )
    }
}
const mapStateToProps = state => {
    return {
        metrics: state.metrics,
    }
}
const mapDispatchToProps = {
    addMetric
}
export default connect(mapStateToProps, mapDispatchToProps)(MetricListItem)