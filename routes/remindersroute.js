const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/reminders.js')

router.post('/createreminder', controllers.createReminder)
// router.get('/getallreminders', controllers.getAllReminders)
// router.get('/getreminder/:id', controllers.getReminderById)
// router.put('/updatereminder/:id', controllers.updateReminderById)
// router.delete('/deletereminder/:id', controllers.deleteReminderById)

module.exports = router
