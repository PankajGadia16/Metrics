const metricController = require('./../controllers/metric.ctrl')

module.exports = (router) => {

    router.route('/metrics').get(metricController.loadMetrics)

    router.route('/metric').post(metricController.addMetric)

    router.route('/agg-metric').get(metricController.aggregateMetric)

    router.route('/graphData/:counter').get(metricController.getGraphData)

}