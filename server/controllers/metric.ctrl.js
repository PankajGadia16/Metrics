const Metric = require('./../models/Metric')
const User = require('./../models/User')
const fs = require('fs')
const responseFunction = (err, results, res, next, ) => {
    if (err)
        res.send(err)
    else if (!results)
        res.send(400)
    else
        return res.send(results)
    return next()
}
module.exports = {
    addMetric: (req, res, next) => {
        new Metric(req.body).save((err, metric) => {
            responseFunction(err, metric, res, next)
        })
    },
    loadMetrics: (req, res, next) => {
        Metric.find().limit(10).sort({ createdAt: -1 }).exec((err, metrics) => {
            responseFunction(err, metrics, res, next)
        })
    },
    getGraphData: (req, res, next) => {
        Metric.find({ counter: req.params.counter }).exec((err, data) => {
            responseFunction(err, data, res, next)
        })
    },
    aggregateMetric: (req, res, next) => {
        Metric.aggregate([
            { $group: { _id: { counter: '$counter', counterDescription: "$counterDescription" }, totalCount: { $sum: '$countValue' } } }
        ]).exec((err, results) => {
            responseFunction(err, results, res, next)
        })
    }
}