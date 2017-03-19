'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },
  skill: [{
    SkillId: {type: Schema.Types.ObjectId, ref: 'Skills'},
    score: Number
  }]
}, {
  timestamps: true
})

let User = mongoose.model('Users', userSchema)

module.exports = User
