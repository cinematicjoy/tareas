"use strict"
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TasksSchema = Schema({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('task', TasksSchema)