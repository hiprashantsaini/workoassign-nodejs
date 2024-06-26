const User = require('../models/userModel');

const userDao = {
    getAllUsers: async () => await User.find({ isActive: true }),
    getUserById: async (id) => await User.findById(id),
    createUser: async (userData) => {
        const user = new User(userData);
        return await user.save();
    },
    updateUser: async (id, userData) => await User.findByIdAndUpdate(id, userData, { new: true }),
    softDeleteUser: async (id) => await User.findByIdAndUpdate(id, { isActive: false })
};

module.exports = userDao;
