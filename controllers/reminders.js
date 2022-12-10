const reminderDetails = require('../models/reminders.js')

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

module.exports = {
  createReminder,
  getAllReminders
}
