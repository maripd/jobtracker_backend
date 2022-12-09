const { Router } = require('express') // returns an express obj with a property called { Router } and the value of this property is a function
//const controllers = require('../controllers')
const router = Router()
const controllers = require('../controllers/index.js')

router.post('/createjob', controllers.createJob)
router.get('/getalljobs', controllers.getJobCards)
router.get('/getjobcard/:id', controllers.getJobCard)
// router.put('/updateJob/:id', controllers.updateJob)
// router.delete('/deleteJob/:id', controllers.deleteJob)

module.exports = router
