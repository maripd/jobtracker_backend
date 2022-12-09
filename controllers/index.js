const jobDetails = require('../models/jobDetails.js')

const createJob = async (req, res) => {
  console.log(req.body)
  try {
    const newJob = await new jobDetails(req.body)
    await newJob.save()
    return res.status(201).json({ newJob })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getJobCards = async (req, res) => {
  console.log(req.body)
  try {
    const allJobs = await jobDetails.find()
    await res.status(200).json({ allJobs })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getJobCard = async (req, res) => {
  console.log(req.body)
  try {
    const jobCard = req.params.id
    const jobCardItem = await jobDetails.findById(jobCard)
    return res.status(200).json({ jobCardItem })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.mesage)
  }
}

module.exports = {
  createJob,
  getJobCards,
  getJobCard
}
