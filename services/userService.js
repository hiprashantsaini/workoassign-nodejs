const userDao = require('../daos/userDao');

const userService = {
    getAllUsers: async () => await userDao.getAllUsers(),
    getUserById: async (id) => await userDao.getUserById(id),
    createUser: async (userData) => await userDao.createUser(userData),
    updateUser: async (id, userData) => await userDao.updateUser(id, userData),
    softDeleteUser: async (id) => await userDao.softDeleteUser(id)
};

module.exports = userService;
