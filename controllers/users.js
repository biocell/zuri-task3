const User = require('../models/users');

//@desc Get all users
//@routes GET/all/users
//@access Public

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
};

//@desc Create a new user
//@routes POST/new/user
//@access Public

exports.addUser = async (req, res) => {
    try {
        //const { name, email,country } = req.body;
        const user = await User.create(req.body);
        return res.status(201).json({
            success: true,
            data: user
        })
        
        
    } catch (err) {
        if (err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: message
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        
        }
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(400).json({
                success: false,
                error: 'User not found'
            })
        }
        return res.status(200).json({
            success: 'true',
            data: user
        })
        
    }
    catch (err) {
        return res.status(500).json({
            success: 'false',
            error: 'Server Error'
        })
    }
};


exports.updateUser = async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true });
      
        
        return res.status(200).json({
            success: 'true',
            data: {
                updateUser
            }
        });
    }
    catch (err) {
        res.status(404).json({
            success: 'false',
            error: 'User not found'
        })
    };
};


exports.deleteUser = async (req, res) => {
    try {
        const user = User.findByIdAndDelete(req.params.id);
        if (user) {
            res.status(200).json({
                success: 'true',
                data: null
            })
        }
        
    }
    catch (err) {
        res.status(404).json({
            success: 'false',
            message: 'User not found'
        })
    }
};