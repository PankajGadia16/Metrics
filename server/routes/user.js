const userController = require('./../controllers/user.ctrl')

module.exports = (router) => {

    router.route('/user').post(userController.addUser)

    router.route('/user/:id').get(userController.getUser)
}