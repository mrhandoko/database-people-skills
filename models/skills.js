'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

let skillSchema = Schema({
  skillname: {
    type: String,
    require: true,
    unique: true
  },
  UserId: [{type: Schema.Types.ObjectId, ref: 'Users'}]
}, {
  timestamps: true
})

let User = mongoose.model('Skills', skillSchema)

module.exports = User
