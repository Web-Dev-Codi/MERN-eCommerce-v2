import asyncHandler from '../middleware/asyncHandler';
import User from '../models/userModel.js';

// @desc Auth user & get token
// @route POST /api/user/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.send('Auth User');
});


// @desc Auth user & get token
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('Register User');
});

// @desc Logs out the user & clearing local storage
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('User Logged Out');
});

// @desc Get users profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('Users Profile');
});


// @desc Update users profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('Users Profile Updated');
});

// @desc Get Users
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('User Profiles');
});

// @desc Get Users by ID
// @routeG ET /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
    res.send('User Deleted');
});

// @desc Get Users
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
    res.send('User Deleted');
});


// @desc Get Users
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('User updated');
});


export {
    authUser,
    registerUser,
    logoutUser,
    getUserById,
    getUserProfile,
    getUsers,
    deleteUser,
    updateUserProfile,
    updateUser
}; 