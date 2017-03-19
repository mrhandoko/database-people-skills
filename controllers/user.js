'use strict'

let Model = require('../models/users')
let User = {}

User.getUsers = (req, res, next) => {
  Model.find({}).populate('skill.SkillId').then((data) => {
    res.send(data)
  })
}

User.newUser = (req, res, next) => {
  Model.create({
    username: req.body.username,
    skill: {
      SkillId: req.body.skill,
      score: req.body.score
    }
  }).then((data) => {
    res.send(data)
  })
}

User.getUser = (req, res, next) => {
  Model.findOne({ _id: req.params.id }).populate('skill.SkillId').then((data) => {
    res.send(data)
  })
}

User.updateUser = (req, res, next) => {
  Model.update({ _id: req.params.id}, {$set: {
      username: req.body.username,
      skill: {
        SkillId: req.body.skill,
        score: req.body.score
      }
  }}).then((data) => {
    res.send(data)
  })
}

User.addUserSkill = (req, res, next) => {
  Model.update({ _id: req.params.id}, { $push: {skill: {SkillId: req.body.skill, score: req.body.score}}})
    .then((data) => {
      res.send(data)
    })
}

User.removeUser = (req, res, next) => {
  Model.remove({ _id: req.params.id}).then((data) => {
    res.send(data)
  })
}

module.exports = User
