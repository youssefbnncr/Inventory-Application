const db = require('../model/queries')

const getHome = (req,res) => {
    res.render('index');
}

const getSignup = (req,res) => {
    res.render('signup');
}

const addUser = async(req,res) => {
    const {username} = req.body;
    await db.insertUser(username)
    res.redirect('/');
}

module.exports = {
    getHome,
    getSignup,
    addUser
};