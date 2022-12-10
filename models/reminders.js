const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reminders = new Schema(
  {
    // jobId: { type: String, required: true },
    reminderText: { type: String, required: true },
    isComplete: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('reminders', Reminders)
