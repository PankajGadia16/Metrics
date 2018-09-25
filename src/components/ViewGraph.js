import React, { Component } from 'react'
import { connect } from 'react-redux'
import CanvasJSReact from './../assets/canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS

class ViewGraph extends Component {
    componentDidUpdate() {
        const grapdDataArray = []
        this.props.metrics.graphData.forEach(metric => {
            grapdDataArray.push({ x: new Date(metric.createdAt), y: metric.countValue })
        })
        const metricValue = this.props.metrics.graphData[0] ? this.props.metrics.graphData[0].counter : ""
        const metricDesc = this.props.metrics.graphData[0] ? this.props.metrics.graphData[0].counterDescription : ""
        if (grapdDataArray.length > 0) {
            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title: {
                    text: metricValue + " - " + metricDesc
                },
                axisX: {
                    valueFormatString: "HH:MM,DD/MM"
                },
                axisY: {
                    title: "Count values",
                    includeZero: false
                },
                data: [{
                    xValueFormatString: "HHDDMM",
                    type: "spline",
                    dataPoints: grapdDataArray
                }]
            })
            chart.render()
        }
    }
    render() {
        return (
            <div id="chartContainer" style={{ height: 400 + "px", width: 70 + "%" }}>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        metrics: state.metrics,
    }
}

export default connect(mapStateToProps, {})(ViewGraph)