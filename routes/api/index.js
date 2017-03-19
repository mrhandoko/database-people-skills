var express = require('express')
var router = express.Router()
var User = require('../../controllers/user')
var Skill = require('../../controllers/skill')

router.get('/users', User.getUsers)
router.get('/user/:id', User.getUser)
router.post('/user', User.newUser)
router.put('/user/:id', User.updateUser)
router.delete('/user/:id', User.removeUser)
router.put('/user/addskill/:id', User.addUserSkill)

router.get('/skills', Skill.getSkills)
router.get('/skill/:id', Skill.getSkill)
router.post('/skill', Skill.newSkill)
router.put('/skill/:id', Skill.updateSkill)
router.delete('/skill/:id', Skill.removeSkill)

module.exports = router
