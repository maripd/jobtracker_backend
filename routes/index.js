const { Router } = require('express') // returns an express obj with a property called { Router } and the value of this property is a function
//const controllers = require('../controllers')
const router = Router()
const controllers = require('../controllers/index.js')

router.post('/createjob', controllers.createJob)
router.get('/getalljobs', controllers.getJobCards)
router.get('/getjobcard/:id', controllers.getJobCard)
router.put('/updatejob/:id', controllers.updateJobCard)
router.delete('/deletejob/:id', controllers.deleteJobCard)

router.post('/createreminder', controllers.createReminder)
router.get('/getallreminders', controllers.getAllReminders)
router.get('/getallreminders-job/:jobId', controllers.getAllRemindersByJobId)
router.get('/getreminder/:id', controllers.getReminderById)
router.put('/updatereminder/:id', controllers.updateReminder)
router.delete('/deletereminder/:id', controllers.deleteReminder)

router.post('/createuser', controllers.createUser)
router.get('/getallusers', controllers.getAllUsers)
router.get('/getuser/:id', controllers.getUserById)
router.put('/updateuser/:id', controllers.updateUser)
router.delete('/deleteuser/:id', controllers.deleteUser)

module.exports = router
