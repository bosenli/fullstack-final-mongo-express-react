//build database schema 

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Plan = new Schema (
    {
        date : {type : String, required: true},
        time: {type: String, required: false },
        plan: {type : String, required: true},
        status: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('plans', Plan)

//next go to seed/plans.js