const user = require('./user')
const metric = require('./metric')
module.exports = (router) => {
    user(router)
    metric(router)
}