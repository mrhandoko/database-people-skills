'use strict'

let Model = require('../models/skills')
let Skill = {}

Skill.getSkills = (req, res, next) => {
  Model.find({}).then((data) => {
    res.send(data)
  })
}

Skill.newSkill = (req, res, next) => {
  Model.create({
    skillname: req.body.skill,
    UserId: req.body.user
  }).then((data) => {
    res.send(data)
  })
}

Skill.getSkill = (req, res, next) => {
  Model.findOne({ _id: req.params.id }).then((data) => {
    res.send(data)
  })
}

Skill.updateSkill = (req, res, next) => {
  Model.update({_id: req.params.id}, {$set: {
      skillname: req.body.skill
  }}).then((data) => {
    res.send(data)
  })
}

Skill.removeSkill = (req, res, next) => {
  Model.remove({_id: req.params.id}).then((data) => {
    res.send(data)
  })
}

module.exports = Skill
