const jobDetails = require('../models/jobDetails.js')
const reminderDetails = require('../models/reminders.js')
const userDetails = require('../models/users.js')

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
    const jobCardId = req.params.id
    const jobCardItem = await jobDetails.findById(jobCardId)
    return res.status(200).json({ jobCardItem })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.mesage)
  }
}

const updateJobCard = async (req, res) => {
  try {
    const jobCardId = req.params.id
    const editJobCard = await jobDetails.findByIdAndUpdate(jobCardId, req.body)
    console.log(editJobCard)
    return res.status(200).json({ editJobCard })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const deleteJobCard = async (req, res) => {
  const jobCardId = req.params.id
  try {
    const removeJobCard = await jobDetails.findByIdAndDelete(jobCardId)
    console.log(removeJobCard)
    return res.status(200).json({ removeJobCard })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const createReminder = async (req, res) => {
  console.log(req.body)
  try {
    const newReminder = await new reminderDetails(req.body)
    await newReminder.save()
    return res.status(201).json({ newReminder })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllReminders = async (req, res) => {
  console.log(req.body)
  try {
    const allReminders = await reminderDetails.find()
    await res.status(200).json({ allReminders })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReminderById = async (req, res) => {
  try {
    const reminderId = req.params.id
    const reminderItem = await reminderDetails.findById(reminderId)
    return res.status(200).json({ reminderItem })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const updateReminder = async (req, res) => {
  try {
    const reminderId = req.params.id
    const editReminder = await reminderDetails.findByIdAndUpdate(
      reminderId,
      req.body
    )
    console.log(editReminder)
    return res.status(200).json({ editReminder })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const deleteReminder = async (req, res) => {
  const reminderId = req.params.id
  try {
    const removeReminder = await reminderDetails.findByIdAndDelete(reminderId)
    console.log(removeReminder)
    return res.status(200).json({ removeReminder })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const createUser = async (req, res) => {
  console.log(req.body)
  try {
    const newUser = await new userDetails(req.body)
    await newUser.save()
    return res.status(201).json({ newUser })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userDetails.find()
    return res.status(200).json({ allUsers })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await userDetails.findById(userId)
    return res.status(200).json({ user })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id
    const editUser = await userDetails.findByIdAndUpdate(userId, req.body)
    console.log(editUser)
    return res.status(200).json({ editUser })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id
    const deleteUser = await userDetails.findByIdAndDelete(userId)
    console.log(deleteUser)
    return res.status(200).json({ deleteUser })
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createJob,
  getJobCards,
  getJobCard,
  updateJobCard,
  deleteJobCard,
  createReminder,
  getAllReminders,
  getReminderById,
  updateReminder,
  deleteReminder,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
}
0
