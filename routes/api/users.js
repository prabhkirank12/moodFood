const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
const {getAssignedUserFoods} = require("../../utils/backend-utils");

router.post('/register', (req, res) => {
    
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    
  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        // Otherwise create a new user
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        })
        
        // Creates and salts the password digest
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;

            // Saves the new user then sends back the user's information

            // TODO: serapate moodsExist from user both on the backend and
            // frontend into its own slice of state
            // when post-auth compontent mounts, query backend for moodsExist
            // should resolve issue on moodsExist not being updated on refresh
            newUser.save()
              .then(user => {
                const payload = {id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, moodsExist: false,};

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {expiresIn: 3600},
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token,
                        })
                    }
                )
              })
              .catch(err => console.log(err));
          })
        })
      }
    })
})

router.post("/login", (req, res) => {
    // validates login input, making sure the inputs are strings, etc.
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
     }

    const email = req.body.email;
    const password = req.body.password;

    // Finds the user associated with the email. If none exists, returns an
    // error
    User.findOne({email})
        .then(user => {
            if (!user) {
                return res.status(404).json({email: "This user does not exist"});
            }
            
            // Makes sure the password is correct, if not returns an error
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        // checks if the user has any assigned food types
                        moodsExist = getAssignedUserFoods(user).length > 0;

                        // creates the user payload
                        const payload = {
                            id: user.id,
                            email:
                            user.email,
                            firstName:
                            user.firstName,
                            lastName:
                            user.lastName,
                            moodsExist,
                        }


                        // signs and sends payload back
                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            {expiresIn: 3600},
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token,
                                })
                            }
                        )
                    } else {
                        return res.status(400).json({password: "Incorrect password"});
                    }
                })
        })

})

module.exports = router;