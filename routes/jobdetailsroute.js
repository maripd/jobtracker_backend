const { Router } = require('express') // returns an express obj with a property called { Router } and the value of this property is a function
//const controllers = require('../controllers')
const router = Router()
const controllers = require('../controllers/jobdetails.js')

router.post('/createjob', controllers.createJob)
router.get('/getalljobs', controllers.getJobCards)
router.get('/getjobcard/:id', controllers.getJobCard)
router.put('/updatejob/:id', controllers.updateJobCard)
router.delete('/deletejob/:id', controllers.deleteJobCard)

module.exports = router
