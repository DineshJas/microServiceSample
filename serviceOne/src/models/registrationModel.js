const mongoose = require('mongoose');

const registrationSchema = mongoose.Schema({
    mobileNumber: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    isOtpVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user_registration', registrationSchema);