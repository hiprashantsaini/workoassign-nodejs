const userService = require('../services/userService');
const userDto = require('../dtos/userDto');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.render('allUsers',{users:users});
            // res.json(users);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await userService.getUserById(req.params.userId);
            res.json(user);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    createUser: async (req, res) => {
        try {
            const { error } = userDto.createUser.validate(req.body);
            if (error) return res.status(400).send(error.details[0].message);
            const user = await userService.createUser(req.body);
            const users = await userService.getAllUsers();
            res.render('allUsers',{users:users});
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    updateUser: async (req, res) => {
        try {
            const { error } = userDto.updateUser.validate(req.body);
            if (error) return res.status(400).send(error.details[0].message);
            const user = await userService.updateUser(req.params.userId, req.body);
            const users = await userService.getAllUsers();
            res.render('allUsers',{users:users});
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    softDeleteUser: async (req, res) => {
        try {
            await userService.softDeleteUser(req.params.userId);
            const users = await userService.getAllUsers();
            res.render('allUsers',{users:users});
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    // edit user functionality 
    editUserLoad:async(req,res)=>{
        try {
            const user = await userService.getUserById(req.params.userId);
            if(user){
                res.render('updateUser',{user:user});
            }else{
                res.redirect('/admin/dashboard')
            }
        } catch (error) {
            console.log(error.message);
        }
    }
};

module.exports = userController;
