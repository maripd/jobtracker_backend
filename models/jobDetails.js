const mongoose = require('mongoose')
const Schema = mongoose.Schema

const JobDetails = new Schema(
  {
    companyName: { type: String, required: true },
    jobTitle: { type: String, required: true },
    hiringStatus: { type: String, required: true },
    jobDateAdded: { type: String, required: true },
    dateApplied: { type: String, required: true },
    applicationStatus: { type: String, required: true },
    contactEmail: { type: String, required: true },
    notes: { type: String, required: true },
    urls: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('jobDetails', JobDetails)
