Registration = require('../models/registrationModel');

exports.newUser = (req, res) => {
    var newEntry = new Registration();
    Registration.findOne({mobileNumber: req.body.mobileNumber}, (err, user) => {
        if(err){
            res.json({
                message: 'something went wrong'
            })
        } else if (!user) {
            if(!req.body.mobileNumber){
                res.json({
                    message: 'parameter missing',
                });
            } else {
                newEntry.mobileNumber = req.body.mobileNumber;
                newEntry.otp = Math.floor(100000 + Math.random() * 900000);
                newEntry.save( () => {
                    res.json({
                        message: 'user registered successfully',
                        data: newEntry
                    });
                });
            }
        } else {
            res.json({
                message: 'User already registered'
            })
        }
    })
}