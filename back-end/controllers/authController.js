const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/user')

// Registration
router.post('/register', async (req, res)=> {
    console.log(req.body)
    try{
        // Create the new user in the db
        const newUser = await User.create(req.body)
        console.log(req.body)

        // Create their new password in the db
        const password = req.body.password
        const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(12))
        console.log(passwordHash)

        // Link password and user and save
        newUser.password = passwordHash
        await newUser.save()
        console.log(newUser)

        // Update the session to log the user in
        req.session.username = req.body.username
        req.session.password = req.body.password
        req.session.logged = true
        
        // Send back the newUser to confirm everything worked
        res.json({
            status: 200,
            data: newUser
        })

    }catch(err){
        console.log(err)
        res.json({
            status: 500,
            data: error
        })
    }
});

// Login
router.post('/login', async (req, res)=> {
    console.log(req.body)
    try {
        // Find the user in the db
        const foundUser = await User.findOne({username: req.body.username})
        console.log(foundUser)

        // Check their password
        if (foundUser){
            if (bcrypt.compareSync(req.body.password, foundUser.password)){
                
                // If password is correct, log them in
                console.log("GOT THE USER")
                req.session.logged = true
                console.log(req.session.logged)
                req.session.userId = foundUser._id
                console.log(req.session.userId)
                req.session.user = foundUser
                console.log(foundUser)

                // Send back the foundUser to confirm everything worked
                res.json({
                    status: 200,
                    data: foundUser
                })
            }
            else {
                // Redirect if password is incorrect
                req.session.message = 'incorrect username or password';
                console.log(req.session.message);
                res.redirect('/auth/login');
                }
            }
        else{
            // Redirect if username is incorrect
            req.session.message = 'username or password is incorrect';
            console.log(req.session.message);
            res.redirect('/auth/login');
            }

    }catch(err){
        console.log(err);
        res.json({
            status: 500,
            data: err
        });
    }
});

// Logout
router.get('/logout', (req, res)=> {
    req.session.destroy((err) => {
        if(err){
            res.send(err);
        } else {
            res.redirect('/auth/login');
        }
    });
});

module.exports = router;